import React from "react";
import { Form } from "react-bootstrap";
import SearchField from "./SearchField";
import SelectFields from "./SelectFields";
import { fetchDataOfBooks } from '../../slices/dataResultOfSearchingSlice.js';
import { useSelector, useDispatch, batch } from 'react-redux';
import { useFormik } from 'formik';
import { actionsDataResultOfSearching } from "../../slices/dataResultOfSearchingSlice";
import { actionsOfSearchingData } from "../../slices/dataOfSearchingSlice";

const FormHeader = () => {
    const meta = useSelector((state) => state.dataOfSearching.meta);
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: { bookName: meta.bookName, selectByCategory: meta.selectByCategory, selectBySort: meta.selectBySort },
        validateOnChange: false,
        validateOnBlur: false,
        onSubmit: (values, actions) => {
            batch(() => {
                dispatch(actionsDataResultOfSearching.setType({ type: 'firstLoad' }));
                dispatch(actionsOfSearchingData.setMetaOfSearching(
                    {
                        data:
                        {
                            bookName: values.bookName,
                            selectByCategory: values.selectByCategory,
                            selectBySort: values.selectBySort
                        }
                    }
                )
                )
                dispatch(actionsDataResultOfSearching.removeListOfBooks());
                dispatch(fetchDataOfBooks());
            });
        }
    })
    return (
        <Form noValidate className="col-12 col-md-6 mt-3 mt-mb-0" onSubmit={formik.handleSubmit}>
            <h3 className='text-center'>Начни поиск</h3>
            <SearchField formik={formik} />
            <SelectFields formik={formik} />
        </Form>
    )
}

export default FormHeader; 