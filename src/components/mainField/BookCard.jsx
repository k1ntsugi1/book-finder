import React from "react";
import { Card } from "react-bootstrap";
import { actionsOfCurrentBook } from "../../slices/dataCurrentBookSlice";
import { useDispatch } from "react-redux";

const BookCard = ({ book }) => {
    const dispatch = useDispatch()
    const [firstCategory] = book.categories !== null ? book.categories.toString().split(', ') : [null];
    const handlerNewCurrentBook = (currentBookId) => () => {
        dispatch(actionsOfCurrentBook.setCurrentBook({currentBookId}))
    }
    return (
        <Card className="p-0 col-5 col-md-3 col-xs-12 m-3 border-info bg-light bookCard" onClick={handlerNewCurrentBook(book.id)}>
            {book.imgUrl && <Card.Img variant="top" src={book.imgUrl} className="mx-auto mt-3 w-50 shadow-lg"/>}
            <Card.Body className="my-auto">
                <Card.Title>{book.name}</Card.Title>
                <Card.Text className="fw-light text-decoration-underline">
                    {firstCategory}
                </Card.Text>
                <Card.Text className="fw-light">
                    {book.authors}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default BookCard;