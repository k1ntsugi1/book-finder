
import React from 'react';
import Header from './components/headerField/Header.jsx';
import Main from './components/mainField/Main.jsx';

function App() {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <div className='flex-grow-1'>
        <div className='p-0 container-fluid text-white'>
          <Header/>
          <Main/>
        </div>
      </div>
    </div>
    
  );
}

export default App;
