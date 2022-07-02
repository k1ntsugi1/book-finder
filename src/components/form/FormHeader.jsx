import React from "react";
import { Form } from "react-bootstrap";
import SearchField from "./SearchField";
import SelectFields from "./SelectFields";

const FormHeader = ({ formik }) => {
    const {bookName, selectByCategory, selectBySort, handleChange, handleSubmit} = formik;
    return (
        <Form noValidate className="col-12 col-md-6 mt-3 mt-mb-0" onSubmit={handleSubmit}>
              <h3 className='text-center'>Начни поиск</h3>
              <SearchField formik={{ bookName, handleChange }}/>
              <SelectFields formik={{ selectByCategory, selectBySort, handleChange,}}/>
        </Form>
    )
}

export default FormHeader; 