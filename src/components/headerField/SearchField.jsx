import React, { useRef, useEffect } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const SearchField = ({ t, formik: { bookName, handleChange, errors } }) => {
  const searchField = useRef();
  const ajaxState = useSelector((state) => state.dataResultOfSearching.ajaxState);
  console.log(errors);
  useEffect(() => {
    searchField.current.focus()
  }, []);

  return (
    <Form.Group className="mb-4">
      <InputGroup>
        <Form.Control id="bookName"
          name="bookName"
          type="text"
          placeholder={t("header.searchField.placeholder")}
          value={bookName}
          onChange={handleChange}
          ref={searchField}
          aria-label="searchField"
          isInvalid={!!errors.bookName}
          className="rounded-left border-info" />
        <Form.Control.Feedback type="invalid" tooltip>
          {errors.bookName}
        </Form.Control.Feedback>
        <Button variant="" type="submit" disabled={ajaxState.loading === 'pending'} className="btn-load rounded-right">
          <i className="fa-solid fa-magnifying-glass"></i>
        </Button>

      </InputGroup>
    </Form.Group>
  )
}

export default withTranslation()(SearchField);