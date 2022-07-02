import React from "react";
import { Card } from "react-bootstrap";

const BookCard = ({ book }) => {
    return (
        <Card className="p-0 col-5 col-md-3 col-xs-12 m-3">
            <Card.Img variant="top" src={book.imgUrl} />
            <Card.Body>
                <Card.Title>{book.name}</Card.Title>
                <Card.Text className="fw-light text-decoration-underline">
                    {book.categories}
                </Card.Text>
                <Card.Text className="fw-light">
                    {book.authors}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default BookCard;