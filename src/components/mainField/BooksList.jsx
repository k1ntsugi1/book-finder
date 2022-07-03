import React from "react";
import LoadNewBooks from './LoadNewBooks.jsx';
import BookCard from './BookCard.jsx';
import { useSelector } from "react-redux";
import { selectorsDataResultOfSearching } from "../../slices/dataResultOfSearchingSlice.js";

const BooksList = () => {
    const books = useSelector(selectorsDataResultOfSearching.selectAll);
    const totalBooks = useSelector((state) => state.dataOfSearching.totalBooks);
    
    return (
        <>
            {totalBooks && <h2 className='fw-bold'>Найдено: {totalBooks} книг</h2>}

            <div className='row justify-content-around'>
                {totalBooks
                    && books.map((book) => {
                        return (
                            <BookCard book={book} key={book.id} />
                        )
                    })
                }
            </div>

            {totalBooks && <LoadNewBooks/>}
        </>
    )
}

export default BooksList;