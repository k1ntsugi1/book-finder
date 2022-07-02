import {
    createSlice,
    createEntityAdapter,
  } from '@reduxjs/toolkit';

const booksAdapter = createEntityAdapter();
const initialState = booksAdapter.getInitialState();

const dataResultOfSearchingSlice = createSlice({
    name: 'dataResultOfSearchingSlice',
    initialState,
    reducers: {
        addNewBooks: booksAdapter.upsertMany,
        removeAllBooks: booksAdapter.removeAll,
    },
})


export const selectorsDataResultOfSearching = booksAdapter.getSelectors((store) => store.dataResultOfSearching);

export const  actionsDataResultOfSearching = dataResultOfSearchingSlice.actions;

export default dataResultOfSearchingSlice.reducer;