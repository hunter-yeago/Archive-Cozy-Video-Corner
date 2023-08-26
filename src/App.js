import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Videodisplay from './components/VideoDisplay/Videodisplay';
import './styles/App.scss';

function App() {
  return (
    <>
      <div className='sitecontainer'>
        <div className='headerspace'>
          <Header />
        </div>
          
        <div className='bodyspace'>
          <Sidebar />
          <Videodisplay />
        </div>  
      </div>
    </>
  );
}

export default App;