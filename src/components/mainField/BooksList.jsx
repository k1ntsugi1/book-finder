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
    const {totalBooks, oldStartIndex} = useSelector((state) => state.dataOfSearching);
    
    return (
        <>
            {
                totalBooks
            &&  <h3 className='fw-bold'>
                    {t('main.totalBooks')}: {totalBooks}
                </h3>
            }

            <div className='row justify-content-around'>
                {totalBooks
                    && books.map((book) => {
                        return (
                            <BookCard book={book} key={book.id} />
                        )
                    })
                }
            </div>
            
            {
                ajaxState.error === 'Network Error'
             && ajaxState.type === 'someLoad' 
             && <ErrorFetch>
                    <LoadNewBooks/>
                </ErrorFetch>
            }
            {
                ajaxState.error === null
             && totalBooks
             && (totalBooks - oldStartIndex > 30)
             && <LoadNewBooks/>
            }
        </>
    )
}

export default withTranslation()(BooksList);