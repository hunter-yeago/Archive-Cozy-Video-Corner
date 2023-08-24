import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Videodisplay from './components/VideoDisplay/Videodisplay';
import BackgroundImage from './components/BackgroundImage/BackgroundImage';
import './styles/App.scss';
import wings from './assets/magpie.png';

 
// import { Videolist } from './components/Videolist/Videolist';

function App() {
  return (
    <>
    <div className='sitecontainer'>

      <div className='headerspace'>
        <Header />
      </div>
        
        <div className='bodyspace'>
        
        {/* <div className=".backgroundimagecontainer">
            <img className='bgimage' src={wings}></img>
        </div> */}
        <Sidebar />
        <Videodisplay />
        </div>
        
      </div>
    </>
  );
}

export default App;