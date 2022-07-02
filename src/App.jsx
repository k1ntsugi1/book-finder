import { useFormik } from 'formik';
import React from 'react';
import FormHeader from './components/form/FormHeader.jsx';
import BookCard from './components/BookCard.jsx';
import { handleLoadingBooks } from './ajax/handleLoadingBooks.js'
import LoadNewBooks from './components/LoadNewBooks.jsx';
import {selectorsBooks} from './slices/booksSlice.js';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const books = useSelector(selectorsBooks.selectAll);
  const meta = useSelector((state) => state.uiBooks.meta);
  const startIndex = useSelector((state) => state.uiBooks.startIndex);
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
          <header className='py-2 d-flex flex-column align-items-center bg-dark'>
            <FormHeader formik={formik}/>
          </header>
          <main className="h-100 py-3 d-flex flex-column align-items-center text-dark">
            {meta.totalBooks && <h2 className='fw-bold'>Найдено: {meta.totalBooks} книг</h2>}

            <div className='row justify-content-around'>
              {meta.totalBooks 
              && books.map((book) => {
                  return (
                    <BookCard book={book} key={book.id}/>
                  )
                })
              }
            </div>

          {meta.totalBooks && <LoadNewBooks meta={meta} someProps={{startIndex, dispatch }}/>}
          </main>
        </div>
      </div>

      
    </div>
    
  );
}

export default App;
