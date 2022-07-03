import React from "react";
import { selectorsDataResultOfSearching } from '../../slices/dataResultOfSearchingSlice.js';
import { actionsOfCurrentBook } from '../../slices/dataCurrentBookSlice.js';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from "react-bootstrap";

const AboutBook = () => {
    const currentBookId = useSelector((state) => state.dataCurrentBook.currentBookId);
    const currentBook = useSelector((store) => selectorsDataResultOfSearching.selectById(store, currentBookId));
    const dispatch = useDispatch();

    const handleRemoveCurrentBook = () => {
        dispatch(actionsOfCurrentBook.removeCurrentBook())
    };

    return (
        <div className="w-75">
            <div className="d-flex flex-row justify-content-start">
                <Button variant="" className="text-decoration-underline btn-back" onClick={handleRemoveCurrentBook}> ← Вернутсья к книгам</Button>
            </div>
            <hr />
            <div className="container shadow-lg">
                <div className="row">
                    <div className="d-flex col-sm-6 py-3 bg-light">
                        {currentBook.imgUrl && <img src={currentBook.imgUrl} alt="ImgBook" className="m-auto d-block" style={{width: '280px'}}/>}
                    </div>
                    <div className="d-flex flex-column col-sm-6">
                        <span className="mb-3 fw-bold fs-3">{currentBook.name}</span>
                        {currentBook.categories && <span className="mb-3 ">Categories: <span className="text-decoration-underline">{currentBook.categories}</span></span>}
                        {currentBook.authors && <span className="mb-3 ">Authors: <span className="fw-bold">{currentBook.authors}</span></span>}
                        <div className="p-3 w-100 border overflow-auto" style={{height: '300px'}}>{currentBook.description ?? 'no description'}</div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutBook;