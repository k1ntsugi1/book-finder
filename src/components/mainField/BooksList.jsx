import React from "react";
import { withTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import LoadNewBooks from './LoadNewBooks.jsx';
import BookCard from './BookCard.jsx';
import ErrorFetch from "./ErrorFetch.jsx";

import { selectorsDataResultOfSearching } from "../../slices/dataResultOfSearchingSlice.js";



const BooksList = ({t}) => {
    const books = useSelector(selectorsDataResultOfSearching.selectAll);
    const ajaxState = useSelector((state) => state.dataResultOfSearching.ajaxState);
    const totalBooks = useSelector((state) => state.dataOfSearching.totalBooks);
    
    return (
        <>
            {totalBooks && <h3 className='fw-bold'>{t('main.totalBooks')}: {totalBooks}</h3>}

            <div className='row justify-content-around' style={{minHeight: '200px', minWidth: '200px'}}>
                {totalBooks
                    && books.map((book) => {
                        return (
                            <BookCard book={book} key={book.id} />
                        )
                    })
                }
            </div>
            {ajaxState.error === 'No Results' && ajaxState.type === 'someLoad' && <ErrorFetch error={ajaxState.error}/>}
            {ajaxState.error === 'Network Error' && ajaxState.type === 'someLoad' && <ErrorFetch><LoadNewBooks/></ErrorFetch>}
            {ajaxState.error === null && totalBooks  && <LoadNewBooks/>}
        </>
    )
}

export default withTranslation()(BooksList);