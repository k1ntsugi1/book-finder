import React from "react";
import { useSelector } from "react-redux";

const ErrorFetch = () => {
    const error = useSelector((state) => state.dataResultOfSearching.ajaxState.error)

    return (
        <div className="p-5 align-self-center border border-danger">
            {error === "AxiosError" && <h3>Please check Network</h3>}
            {error === "TypeError" && <h3>Please check bookName</h3>}
        </div>
    )
}

export default ErrorFetch;