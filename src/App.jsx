import { useFormik } from 'formik';

import React from 'react';
import FormHeader from './components/form/FormHeader.jsx';

import { handleLoadingBooks } from './ajax/handleLoadingBooks.js'

import {selectorsDataResultOfSearching} from './slices/dataResultOfSearchingSlice.js';
import { useSelector, useDispatch } from 'react-redux';
import BooksList from './components/Books/BooksList.jsx';
import AboutBook from './components/AboutBook.jsx';

function App() {
  const books = useSelector(selectorsDataResultOfSearching.selectAll);
  const meta = useSelector((state) => state.dataOfSearching.meta);
  const startIndex = useSelector((state) => state.dataOfSearching.startIndex);
  const currentBookId = useSelector((state) => state.dataCurrentBook.currentBookId);
  console.log(currentBookId, 'currntBookId')
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {bookName: meta.bookName, selectByCategory: meta.selectByCategory, selectBySort: meta.selectBySort},
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values) => { handleLoadingBooks('firstLoad', startIndex, dispatch, values.bookName, values.selectByCategory, values.selectBySort)}
  })

  return (
    <div className='d-flex flex-column min-vh-100'>
      <div className='flex-grow-1'>
        <div className='py-3 px-0 container-fluid text-white'>
          <header className='py-2 d-flex flex-column align-items-center headerBg'>
            <FormHeader formik={formik}/>
          </header>
          <main className="h-100 py-3 d-flex flex-column align-items-center text-dark">
            {currentBookId 
              ? <AboutBook currentBookId={currentBookId}/>
              : <BooksList meta={meta} books={books} startIndex={startIndex} dispatch={dispatch}/>}
          </main>
        </div>
      </div>

      
    </div>
    
  );
}

export default App;
