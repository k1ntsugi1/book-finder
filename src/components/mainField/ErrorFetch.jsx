import React from "react";
import { useSelector } from "react-redux";

const ErrorFetch = () => {
    const error = useSelector((state) => state.dataResultOfSearching.ajaxState.error)

    return (
        <div className="align-self-center">
            {error === "AxiosError" && <h3>Check Network</h3>}
            {error === "TypeError" && <h3>Check bookName</h3>}
        </div>
    )
}

export default ErrorFetch;