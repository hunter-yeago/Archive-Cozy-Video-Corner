import React from 'react';
import Videodisplay from './components/VideoDisplay/Videodisplay';
import './styles/App.scss';
import ControlBoard from './components/ControlBoard/ControlBoard';
import { useState, useEffect } from 'react';

function App() {

  const [isMobile, setMobile] = useState(window.innerWidth < 641);

  const updateMedia = () => {
    setMobile(window.innerWidth < 641);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });


  return (
    <>
      {isMobile ? (
      <div className='sitecontainer'>
      <div className='headerspace'>
        {/* <Header /> */}
        <ControlBoard />
      </div>
        
      <div className='bodyspace'>     
        <Videodisplay />
      </div> 
    </div>
      ) : (
        <div className='sitecontainer'>
        <div className='headerspace'>
          {/* <Header /> */}
        </div>
          
        <div className='bodyspace'>
          <div>
            <ControlBoard />
          </div>

          <Videodisplay />
        </div> 
      </div>
      )}
    </>
  );
}

export default App;