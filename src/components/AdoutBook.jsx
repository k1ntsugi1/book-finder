import React from "react";
import { selectorsBooks } from './slices/booksSlice.js';
import { actionsBooks  } from '../slices/booksSlice.js';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from "react-bootstrap";

const AboutBook = () => {
    const bookId = useSelector((store) => store.uiBooks.currentBook);
    const currentBook = useSelector(selectorsBooks.selectById(bookId));
    const dispatch = useDispatch();
    const handleRemoveCurrentBook = () => {
        dispatch(actionsBooks.removeCurrentBook())
    }
    return (
        <div className="h-100">
            <div>
                <h2>{currentBook.name}</h2>
                <Button variant="success" onClick={handleRemoveCurrentBook}></Button>
            </div>
            <div className="d-flex flex-row">
                <div className="max-vw-50">
                    <img src={currentBook.imgUrl} alt="ImgBook" />
                </div>
                <div>
                    <p>{currentBook.categories}</p>
                    <p>{currentBook.authors}</p>
                    <div className="border">{currentBook.description}</div>
                </div>
            </div>
        </div>

    )
}

export default AboutBook;