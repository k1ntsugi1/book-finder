import React  from "react";
import { useSelector } from "react-redux";

import AboutBook from "./AboutBook.jsx";
import BooksList from "./BooksList.jsx";
import Spinner from "./Spinner.jsx";
import ErrorFetch from "./ErrorFetch.jsx";


const Main = () => {
    const ajaxState = useSelector((state) => state.dataResultOfSearching.ajaxState);
    const currentBookId = useSelector((state) => state.dataCurrentBook.currentBookId);

    return (
        <main className="h-100 py-3 d-flex flex-column align-items-center text-dark">
            {ajaxState.loading === 'pending' &&  ajaxState.type === 'firstLoad' && <Spinner/>}
            {ajaxState.error && ajaxState.type === 'firstLoad' && <ErrorFetch/>}
            {
                currentBookId
                ? <AboutBook/>
                : <BooksList/>
            }
        </main>
    )
}
export default Main;