import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { handleLoadingBooks } from "../../ajax/handleLoadingBooks";
import { Spinner } from "../Spinner";

const LoadNewBooks = ({ meta: { bookName, selectByCategory, selectBySort }, startIndex, dispatch }) => {
    const ajaxState = useSelector((state) => state.dataResultOfSearching.ajaxState);
    return (
        <div className="d-flex flex-column">
            <Button variant=""
                className="btn-load "
                onClick={() => { handleLoadingBooks('someLoad', startIndex, dispatch, bookName, selectByCategory, selectBySort) }}>
                <span className="fs-4 fw-bold">Load </span>
                <i class="fa-solid fa-spinner fa-2xl"></i>
            </Button>
            {(ajaxState.loading === 'pending' && ajaxState.type === 'someLoad') && <Spinner/>}
        </div>
    )
}

export default LoadNewBooks;