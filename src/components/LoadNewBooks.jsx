import React from "react";
import { Button } from "react-bootstrap";

import { handleLoadingBooks } from "../ajax/handleLoadingBooks";

const LoadNewBooks = ({meta: {bookName, selectByCategory, selectBySort}, startIndex, dispatch }) => {
    return (
        <div>
            <Button variant="success" 
                onClick={() => {  handleLoadingBooks('someLoad', startIndex, dispatch, bookName, selectByCategory, selectBySort )}}>Загрузить еще</Button>
        </div>
    )
}

export default LoadNewBooks;