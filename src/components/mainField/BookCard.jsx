import React from "react";
import { useDispatch } from "react-redux";
import { Card } from "react-bootstrap";

import { actionsOfCurrentBook } from "../../slices/dataCurrentBookSlice";


const BookCard = ({ book }) => {
    const dispatch = useDispatch()

    const handlerNewCurrentBook = (currentBookId) => () => {
        dispatch(actionsOfCurrentBook.setCurrentBook({ currentBookId }))
    }
    const parseCategories = (categories) => {
        return categories.includes(',') ? categories.split(', ') : categories.split(' ')
    }

    const [firstCategory] = book.categories !== null ? parseCategories(book.categories.toString()) : [null];
    
    return (
        <Card className="p-0 col-5 col-md-3 col-xs-12 m-3 border-info bg-light bookCard" onClick={handlerNewCurrentBook(book.id)}>
            {
                book.imgUrl &&
                <Card.Img variant="top" src={book.imgUrl} className="mx-auto mt-3 w-50 shadow-lg" alt="imgBook" />
            }
            <Card.Body className="my-auto">
                {
                    book.name &&
                    <Card.Title>{book.name}</Card.Title>
                }
                {
                    firstCategory && 
                    <Card.Text className="fw-light text-decoration-underline">
                        {firstCategory}
                    </Card.Text>
                }
                {
                    book.authors && 
                    <Card.Text className="fw-light">
                        {book.authors}
                    </Card.Text>
                }
            </Card.Body>
        </Card>
    )
}

export default BookCard;