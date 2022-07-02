import {parseData} from './parseData.js'
import { ajax } from './ajax.js';
import { actionsBooks  } from '../slices/booksSlice.js';
import { batch } from 'react-redux';

const handleLoadingBooks = async (type, startIndex, dispatch,  bookName, selectByCategory, selectBySort) => {
    console.log(startIndex)
    const currentStartIndex = type === 'firstLoad' ? startIndex : startIndex + 30;
    console.log(currentStartIndex)
    const response = await ajax(bookName, selectByCategory, selectBySort, currentStartIndex)

    const {totalBooks, items} = parseData(response);
    console.log(totalBooks);
    const mappingType = {
        'firstLoad': () => {
            batch(() => {
                dispatch(actionsBooks.removeAllBooks())
                dispatch(actionsBooks.addNewBooks(items))
                dispatch(actionsBooks.updateStartIndex({currentStartIndex}))
                dispatch(actionsBooks.updateMeta({meta: {bookName, totalBooks, selectByCategory, selectBySort}}))
            })
        },
        'someLoad': () => {
            batch(() => {
                dispatch(actionsBooks.addNewBooks(items))
                dispatch(actionsBooks.updateStartIndex({currentStartIndex}))
            })
        }
    }
    mappingType[type]();

}

export { handleLoadingBooks };