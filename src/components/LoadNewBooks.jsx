import React from "react";
import { Button } from "react-bootstrap";

import { handleLoadingBooks } from "../ajax/handleLoadingBooks";

const LoadNewBooks = ({meta: {bookName, selectByCategory, selectBySort}, startIndex, dispatch }) => {
    return (
        <div>
            <Button variant=""
                    className="btn-load "
                    onClick={() => {  handleLoadingBooks('someLoad', startIndex, dispatch, bookName, selectByCategory, selectBySort )}}>
                <span className="fs-4 fw-bold">Load </span>
                <i class="fa-solid fa-spinner fa-2xl"></i>
            </Button>
        </div>
    )
}

export default LoadNewBooks;