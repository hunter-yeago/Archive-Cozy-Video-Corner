import React from 'react';
import Header from './components/Header/Header';
import Videodisplay from './components/VideoDisplay/Videodisplay';
import './styles/App.scss';
import ControlBoard from './components/ControlBoard/ControlBoard';

function App() {

  return (
    <>
      <div className='sitecontainer'>
        <div className='headerspace'>
          {/* <Header /> */}
        </div>
          
        <div className='bodyspace'>
          <ControlBoard />
          <Videodisplay />
        </div> 
      </div>
    </>
  );
}

export default App;