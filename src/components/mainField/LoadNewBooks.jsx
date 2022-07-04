import React from "react";
import { Button } from "react-bootstrap";
import { batch, useDispatch, useSelector } from "react-redux";
import { fetchDataOfBooks } from "../../slices/dataResultOfSearchingSlice";
import Spinner from "./Spinner.jsx";
import { actionsDataResultOfSearching } from "../../slices/dataResultOfSearchingSlice";
import { withTranslation } from "react-i18next";

const LoadNewBooks = ({ t }) => {
    const ajaxState = useSelector((state) => state.dataResultOfSearching.ajaxState);
    const dispatch = useDispatch();
    return (

        <div className="d-flex flex-column">
            {ajaxState.loading === 'pending' && ajaxState.type === 'someLoad' && <Spinner />}
            <Button variant=""
                disabled={ajaxState.loading === 'pending'}
                className="btn-load"
                style={{ width: '200px' }}
                onClick={() => {
                    batch(() => {
                        dispatch(actionsDataResultOfSearching.setType({ type: 'someLoad' }))
                        dispatch(fetchDataOfBooks())
                    })
                }}>
                <span className="fs-4 fw-bold">{t("main.loadBtn")}</span>
                <i className="fa-solid fa-spinner fa-2xl"></i>
            </Button>
        </div>

    )
}

export default withTranslation()(LoadNewBooks);