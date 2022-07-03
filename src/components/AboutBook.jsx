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
            <div className="d-flex flex-row justify-content-start">
                <Button variant="" className="text-decoration-underline btn-back" onClick={handleRemoveCurrentBook}> ← Вернутсья к книгам</Button>
            </div>
            <hr />
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 py-3 bg-light">
                        <img src={currentBook.imgUrl} alt="ImgBook" className="mx-auto w-50 d-block"/>
                    </div>
                    <div className="d-flex flex-column col-sm-6">
                        <span className="fw-bold fs-3">{currentBook.name}</span>
                        <span className="text-decoration-underline">{currentBook.categories}</span>
                        <span className="fw-bold flex-grow-1">{currentBook.authors}</span>
                        <div className="border">{currentBook.description}</div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutBook;