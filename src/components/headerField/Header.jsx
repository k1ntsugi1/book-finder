import React from "react";
import FormHeader from "./FormHeader";

const Header = ({ formik }) => {
    return (
        <header className='py-2 d-flex flex-column align-items-center headerBg'>
            <FormHeader formik={formik} />
        </header>
    )
}

export default Header;