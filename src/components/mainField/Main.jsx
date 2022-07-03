import React from "react";
import AboutBook from "./AboutBook.jsx";
import BooksList from "./BooksList.jsx";
import { Spinner } from "../Spinner.jsx";
import { selectorsDataResultOfSearching } from "../../slices/dataResultOfSearchingSlice";
import { useDispatch, useSelector } from "react-redux";

const Main = () => {
    const books = useSelector(selectorsDataResultOfSearching.selectAll);
    const ajaxState = useSelector((state) => state.dataResultOfSearching.ajaxState);
    const meta = useSelector((state) => state.dataOfSearching.meta);
    const currentBookId = useSelector((state) => state.dataCurrentBook.currentBookId);
    const startIndex = useSelector((state) => state.dataOfSearching.startIndex);
    const dispatch = useDispatch();
    return (
        <main className="h-100 py-3 d-flex flex-column align-items-center text-dark">
            {ajaxState.loading === 'pending' &&  ajaxState.type === 'firstLoad' && <Spinner/>}
            {currentBookId
                ? <AboutBook currentBookId={currentBookId} />
                : <BooksList meta={meta} books={books} startIndex={startIndex} dispatch={dispatch} />}
        </main>
    )
}
export default Main;