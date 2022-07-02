import {
    createSlice,
    createEntityAdapter,
  } from '@reduxjs/toolkit';

const booksAdapter = createEntityAdapter();
const initialState = booksAdapter.getInitialState({ startIndex: 0, currentBook: null, meta: {bookName: '', totalBooks: null, selectByCategory: 'all', selectBySort: 'relevance'} });

const booksSLice = createSlice({
    name: 'booksSlice',
    initialState,
    reducers: {
        addNewBooks: booksAdapter.upsertMany,
        removeAllBooks: booksAdapter.removeAll,
        updateStartIndex: (state, {payload: {currentStartIndex}}) => {state.startIndex = currentStartIndex},
        updateMeta: (state, {payload: {meta}}) => {
            state.meta.bookName = meta.bookName;
            state.meta.totalBooks = meta.totalBooks;
            state.meta.selectByCategory = meta.selectByCategory;
            state.meta.selectBySort = meta.selectBySort;
        },
        setCurrentBook: (state, {idBook}) => {state.currentBook = idBook},
        removeCurrentBook: (state) => {state.currentBook = null}
    },
})


export const selectorsBooks = booksAdapter.getSelectors((store) => store.uiBooks);

export const  actionsBooks = booksSLice.actions;

export default booksSLice.reducer;