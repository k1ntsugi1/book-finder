import { useFormik } from 'formik';

import React from 'react';

import { handleLoadingBooks } from './ajax/handleLoadingBooks.js'
import { useSelector, useDispatch } from 'react-redux';
import Header from './components/headerField/Header.jsx';
import Main from './components/mainField/Main.jsx';

function App() {
  const meta = useSelector((state) => state.dataOfSearching.meta);
  const startIndex = useSelector((state) => state.dataOfSearching.startIndex);
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
        <div className='p-0 container-fluid text-white'>
          <Header formik={formik}/>
          <Main/>
        </div>
      </div>
    </div>
    
  );
}

export default App;
