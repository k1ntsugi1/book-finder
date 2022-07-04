import React from "react";
import LoadNewBooks from './LoadNewBooks.jsx';
import BookCard from './BookCard.jsx';
import { useSelector } from "react-redux";
import { selectorsDataResultOfSearching } from "../../slices/dataResultOfSearchingSlice.js";
import { withTranslation } from "react-i18next";
import ErrorFetch from "./ErrorFetch.jsx";

const BooksList = ({t}) => {
    const books = useSelector(selectorsDataResultOfSearching.selectAll);
    const ajaxState = useSelector((state) => state.dataResultOfSearching.ajaxState);
    const totalBooks = useSelector((state) => state.dataOfSearching.totalBooks);
    
    return (
        <>
            {totalBooks && <h3 className='fw-bold'>{t('main.totalBooks')}: {totalBooks}</h3>}

            <div className='row justify-content-around'>
                {totalBooks
                    && books.map((book) => {
                        return (
                            <BookCard book={book} key={book.id} />
                        )
                    })
                }
            </div>
            {ajaxState.error === 'No Results' && ajaxState.type === 'someLoad' && <ErrorFetch/>}
            {ajaxState.error === 'Network Error' && ajaxState.type === 'someLoad' && <ErrorFetch><LoadNewBooks/></ErrorFetch>}
            {totalBooks && ajaxState.error === null && <LoadNewBooks/>}
        </>
    )
}

export default withTranslation()(BooksList);