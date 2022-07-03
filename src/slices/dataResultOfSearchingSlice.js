import {
    createSlice,
    createEntityAdapter,
    createAsyncThunk,
} from '@reduxjs/toolkit';
import axios from 'axios';
import getUrl from '../ajax/getUrl.js';
import { parseData } from '../ajax/parseData.js';

export const fetchDataOfBooks = createAsyncThunk(
    'books/fetchDataOfBooks',
    async (data) => {
        const { type, startIndex, bookName, selectByCategory, selectBySort } = data;
        const currentStartIndex = type === 'firstLoad' ? 0 : startIndex + 30;
        const url = getUrl(bookName, selectByCategory, selectBySort, currentStartIndex)
        const response = await axios.get(url);
        const { totalBooks, items } = parseData(response.data);
        return { items, type, meta: { bookName, selectByCategory, selectBySort, totalBooks }, currentStartIndex }
    }
)

const booksAdapter = createEntityAdapter();
const initialState = booksAdapter.getInitialState({ ajaxState: { loading: 'idle', error: null, type: 'firstLoad' } });

const dataResultOfSearchingSlice = createSlice({
    name: 'dataResultOfSearchingSlice',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDataOfBooks.pending, (state) => {
                state.ajaxState.loading = 'pending';
                state.ajaxState.error = null;
            })
            .addCase(fetchDataOfBooks.fulfilled, (state, { payload: { items, type } }) => {
                console.log(items, type, 'inExtra');
                state.ajaxState.loading = 'fulfilled';
                state.ajaxState.error = null;
                state.ajaxState.type = type;
                const mappingType = {
                    'firstLoad': () => {
                        booksAdapter.removeAll(state);
                        booksAdapter.upsertMany(state, items)
                    },
                    'someLoad': () => {
                        booksAdapter.upsertMany(state, items);
                    }
                }
                mappingType[type]();
            })
            .addCase(fetchDataOfBooks.rejected, (state, data) => {
                console.log(data)
                state.ajaxState.loading = 'error';  
            })
    }
})


export const selectorsDataResultOfSearching = booksAdapter.getSelectors((store) => store.dataResultOfSearching);

export const actionsDataResultOfSearching = dataResultOfSearchingSlice.actions;

export default dataResultOfSearchingSlice.reducer;