import { configureStore } from '@reduxjs/toolkit';

import dataResultOfSearchingReducer from './dataResultOfSearchingSlice';
import dataOfSearchingReducer from './dataOfSearchingSlice';
import dataCurrentBookReducer from './dataCurrentBookSlice';

export default configureStore({
    reducer: {
        dataOfSearching: dataOfSearchingReducer,
        dataCurrentBook: dataCurrentBookReducer,
        dataResultOfSearching: dataResultOfSearchingReducer
    },
})