import {
    createSlice,
    createEntityAdapter,
    createAsyncThunkб
  } from '@reduxjs/toolkit';

export 

const booksAdapter = createEntityAdapter();
const initialState = booksAdapter.getInitialState({ajaxState: {loading: 'idle', error: null, type: 'firstLoad'}});

const dataResultOfSearchingSlice = createSlice({
    name: 'dataResultOfSearchingSlice',
    initialState,
    reducers: {
        addNewBooks: booksAdapter.upsertMany,
        removeAllBooks: booksAdapter.removeAll,
        setNewStatusOfLoading: (state, {payload:{ loading, error, type }}) => {
            state.ajaxState.loading = loading;
            state.ajaxState.error = error;
            state.ajaxState.type = type;
        }
    },
})


export const selectorsDataResultOfSearching = booksAdapter.getSelectors((store) => store.dataResultOfSearching);

export const  actionsDataResultOfSearching = dataResultOfSearchingSlice.actions;

export default dataResultOfSearchingSlice.reducer;