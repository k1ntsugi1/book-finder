import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './booksSlice';

export default configureStore({
    reducer: {
        uiBooks: booksReducer
    },
})