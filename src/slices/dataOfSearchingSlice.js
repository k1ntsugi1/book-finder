import { createSlice } from '@reduxjs/toolkit';


const dataOfSearchingSLice = createSlice({
    name: 'dataOfSearchingSLice',
    initialState: { startIndex: 0,
                    meta: {
                        bookName: '',
                        totalBooks: null,
                        selectByCategory: 'all',
                        selectBySort: 'relevance'
                    },
                  },
    reducers: {
        updateStartIndex: (state, {payload: {currentStartIndex}}) => {state.startIndex = currentStartIndex},
        updateMeta: (state, {payload: {meta}}) => {
            state.meta.bookName = meta.bookName;
            state.meta.totalBooks = meta.totalBooks;
            state.meta.selectByCategory = meta.selectByCategory;
            state.meta.selectBySort = meta.selectBySort;
        },
    },
})

export const  actionsOfsearchingData = dataOfSearchingSLice.actions;

export default dataOfSearchingSLice.reducer;