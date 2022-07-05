import {
    createSlice,
    createEntityAdapter,
    createAsyncThunk,
} from '@reduxjs/toolkit';
import axios from 'axios';

import { getUrl } from '../ajax/getUrl.js';
import { parseData } from '../ajax/parseData.js';

export const fetchDataOfBooks = createAsyncThunk(
    'books/fetchDataOfBooks',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const { type } = state.dataResultOfSearching.ajaxState;
        const { oldStartIndex, meta: {bookName, selectByCategory, selectBySort} } = state.dataOfSearching;
        if (bookName === '') throw new Error('No Results')
        const currentStartIndex = type === 'firstLoad' ? 0 : oldStartIndex + 30;

        const url = getUrl(bookName, selectByCategory, selectBySort, currentStartIndex)
        const response = await axios.get(url);

        const { currentTotalBooks, items } = parseData(response.data);
        return { items, type, currentTotalBooks , currentStartIndex }
    }
)

const booksAdapter = createEntityAdapter();
const initialState = booksAdapter.getInitialState({ ajaxState: { loading: null, error: null, type: null } });

const dataResultOfSearchingSlice = createSlice({
    name: 'dataResultOfSearchingSlice',
    initialState,
    reducers: {
        setType: (state, {payload: {type}}) => {state.ajaxState.type = type},
        removeListOfBooks: booksAdapter.removeAll,
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchDataOfBooks.pending, (state) => {
            state.ajaxState.loading = 'pending';
            state.ajaxState.error = null;
        })
        .addCase(fetchDataOfBooks.fulfilled, (state, { payload: { items } }) => {
            state.ajaxState.loading = 'fulfilled';
            state.ajaxState.error = null;
            booksAdapter.upsertMany(state, items);
        })
        .addCase(fetchDataOfBooks.rejected, (state, action) => {
            state.ajaxState.loading = 'error';  
            state.ajaxState.error = action.error.message;  
        })
    }
})


export const selectorsDataResultOfSearching = booksAdapter.getSelectors((store) => store.dataResultOfSearching);

export const actionsDataResultOfSearching = dataResultOfSearchingSlice.actions;

export default dataResultOfSearchingSlice.reducer;