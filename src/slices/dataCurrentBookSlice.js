import { createSlice } from '@reduxjs/toolkit';
import { actionsDataResultOfSearching } from './dataResultOfSearchingSlice';

const dataCurrentBookSlice = createSlice({
    name: 'dataCurrentBookSlice',
    initialState: { currentBookId: null},
    reducers: {
        setCurrentBook: (state, {payload: { currentBookId }}) => {state.currentBookId = currentBookId},
        removeCurrentBook: (state) => {state.currentBookId = null}
    },
    extraReducers: (builder) => {
        builder
        .addCase(actionsDataResultOfSearching.removeListOfBooks, (state) => {
            state.currentBookId = null;
        })
    }
})

export const  actionsOfCurrentBook = dataCurrentBookSlice.actions;

export default dataCurrentBookSlice.reducer;