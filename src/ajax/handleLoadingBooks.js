import {parseData} from './parseData.js'
import { ajax } from './ajax.js';
import { actionsDataResultOfSearching  } from '../slices/dataResultOfSearchingSlice.js';
import { actionsOfsearchingData } from '../slices/dataOfSearchingSlice.js';
import { batch } from 'react-redux';

const handleLoadingBooks = async (type, startIndex, dispatch,  bookName, selectByCategory, selectBySort) => {
    console.log(startIndex)
    const currentStartIndex = type === 'firstLoad' ? 0 : startIndex + 30;
    console.log(currentStartIndex)
    const response = await ajax(bookName, selectByCategory, selectBySort, currentStartIndex)

    const {totalBooks, items} = parseData(response);
    console.log(totalBooks);
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

export { handleLoadingBooks };