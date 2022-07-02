import React from "react";
import LoadNewBooks from '../LoadNewBooks.jsx';
import BookCard from '../BookCard.jsx';

const BooksList = ({ meta, books, startIndex, dispatch }) => {
    return (
        <>
            {meta.totalBooks && <h2 className='fw-bold'>Найдено: {meta.totalBooks} книг</h2>}

            <div className='row justify-content-around'>
                {meta.totalBooks
                    && books.map((book) => {
                        return (
                            <BookCard book={book} key={book.id} />
                        )
                    })
                }
            </div>

            {meta.totalBooks && <LoadNewBooks meta={meta} startIndex={ startIndex } dispatch={dispatch} />}
        </>
    )
}

export default BooksList;