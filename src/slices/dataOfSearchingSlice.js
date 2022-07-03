import { createSlice } from '@reduxjs/toolkit';
import { fetchDataOfBooks } from './dataResultOfSearchingSlice';

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

    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchDataOfBooks.fulfilled, (state, { payload: {currentStartIndex, type, meta}}) => {
            const mappingType = {
                'firstLoad': () => {
                    state.meta = meta;
                    state.startIndex = currentStartIndex;
                },
                'someLoad': () => {
                    state.startIndex = currentStartIndex;
                }
            };
            mappingType[type]();

        }) 
    }
})

export const  actionsOfsearchingData = dataOfSearchingSLice.actions;

export default dataOfSearchingSLice.reducer;