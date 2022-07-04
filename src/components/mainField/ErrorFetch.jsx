import React from "react";
import { withTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const ErrorFetch = ({ t, children }) => {
    const error = useSelector((state) => state.dataResultOfSearching.ajaxState.error)

    return (
        <>
            <div className="px-5 mb-3 align-self-center border border-info">
                {error === "Network Error" && <h3>{t("main.errorMessage.network")}</h3>}
                {error === "No Results" && <h3>{t("main.errorMessage.noResults")}</h3>}
            </div>
            {children}
        </>
    )
}

export default withTranslation()(ErrorFetch);