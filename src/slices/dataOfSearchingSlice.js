import { createSlice } from '@reduxjs/toolkit';
import { fetchDataOfBooks } from './dataResultOfSearchingSlice';
import { actionsDataResultOfSearching } from './dataResultOfSearchingSlice';

const dataOfSearchingSLice = createSlice({
    name: 'dataOfSearchingSLice',
    initialState: {
        totalBooks: null,
        oldStartIndex: 0,
        meta: {
            bookName: '',
            selectByCategory: 'all',
            selectBySort: 'relevance'
        }
    },
    reducers: {
        setMetaOfSearching: (state, { payload: { data } }) => {
            state.meta = data
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDataOfBooks.fulfilled, (state, { payload: { type, currentTotalBooks , currentStartIndex } }) => {
                const mappingType = {
                    'firstLoad': () => {
                        state.totalBooks = currentTotalBooks;
                        state.oldStartIndex = currentStartIndex;
                    },
                    'someLoad': () => {
                        state.oldStartIndex = currentStartIndex;
                    }
                };
                mappingType[type]();

            })
            .addCase(actionsDataResultOfSearching.removeListOfBooks, (state) => {
                state.totalBooks = null;
            })
    }
})

export const actionsOfSearchingData = dataOfSearchingSLice.actions;

export default dataOfSearchingSLice.reducer;