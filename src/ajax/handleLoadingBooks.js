import {parseData} from './parseData.js'
import { ajax } from './ajax.js';
import { actionsDataResultOfSearching  } from '../slices/dataResultOfSearchingSlice.js';
import { actionsOfsearchingData } from '../slices/dataOfSearchingSlice.js';
import { batch } from 'react-redux';

const handleLoadingBooks = async (type, startIndex, dispatch,  bookName, selectByCategory, selectBySort) => {
    try {
        const currentStartIndex = type === 'firstLoad' ? 0 : startIndex + 30;
        dispatch(actionsDataResultOfSearching.setNewStatusOfLoading({loading: 'pending', error: null, type}))
        const response = await ajax(bookName, selectByCategory, selectBySort, currentStartIndex)
        dispatch(actionsDataResultOfSearching.setNewStatusOfLoading({loading: 'fulfilled', error: null, type}))
        const {totalBooks, items} = parseData(response);
    
        const mappingType = {
            'firstLoad': () => {
                batch(() => {
                    dispatch(actionsDataResultOfSearching.removeAllBooks())
                    dispatch(actionsDataResultOfSearching.addNewBooks(items))
                    dispatch(actionsOfsearchingData.updateStartIndex({currentStartIndex}))
                    dispatch(actionsOfsearchingData.updateMeta({meta: {bookName, totalBooks, selectByCategory, selectBySort}}))
                })
            },
            'someLoad': () => {
                batch(() => {
                    dispatch(actionsDataResultOfSearching.addNewBooks(items))
                    dispatch(actionsOfsearchingData.updateStartIndex({currentStartIndex}))
                })
            }
        }
        mappingType[type]();
    }
    catch(error) {
        dispatch(actionsDataResultOfSearching.setNewStatusOfLoading({loading: 'rejected', error, type}))
    }

}

export { handleLoadingBooks };