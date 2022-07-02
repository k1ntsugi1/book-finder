import React from "react";
import { selectorsDataResultOfSearching } from '../slices/dataResultOfSearchingSlice.js';
import { actionsOfCurrentBook } from '../slices/dataCurrentBookSlice.js';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from "react-bootstrap";

const AboutBook = ({ currentBookId }) => {
    console.log(currentBookId)
    const currentBook = useSelector((store) => selectorsDataResultOfSearching.selectById(store, currentBookId));
    console.log(currentBook)
    const dispatch = useDispatch();
    const handleRemoveCurrentBook = () => {
        dispatch(actionsOfCurrentBook.removeCurrentBook())
    }
    return (
        <div className="h-100">
            <div className="d-flex flex-row justify-content-around">
                <h2>{currentBook.name}</h2>
                <Button variant="success" onClick={handleRemoveCurrentBook}></Button>
            </div>
            <hr />
            <div className="container">
                <div className="d-flex flex-row flex-wrap">
                    <div className="d-flex flex-grow-1 justify-content-center align-self-center">
                        <img src={currentBook.imgUrl} alt="ImgBook" className="w-50"/>
                    </div>
                    <div>
                        <p className="text-decoration-underline">{currentBook.categories}</p>
                        <p>{currentBook.authors}</p>
                        <div className="border">{currentBook.description}</div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutBook;