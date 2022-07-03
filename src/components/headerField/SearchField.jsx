import React, {useRef, useEffect} from "react";
import { Form, InputGroup, Button } from "react-bootstrap";

const SearchField = ({formik: {bookName, handleChange}}) => {
    const searchField = useRef();

    useEffect(() => {
        searchField.current.focus()
      },[])
    return (
        <Form.Group className="mb-2">
                <InputGroup>
                  <Form.Control id="bookName"
                                name="bookName"
                                type="text"
                                placeholder="Введите книгу"
                                value={bookName}
                                onChange={handleChange}
                                ref={searchField}
                                aria-label="searchField"
                                className="rounded-left border-info"/>
                  <Button variant="" type="submit" className="btn-load rounded-right">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </Button>
                </InputGroup>
              </Form.Group>
    )
}

export default SearchField;