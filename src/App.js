import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Videodisplay from './components/VideoDisplay/Videodisplay';
import './styles/App.scss';
import ControlBoard from './components/ControlBoard/ControlBoard';
// import { updateDisplayVideoAvailability } from './actions';
// import { connect } from 'react-redux';
// import { useDispatch } from "react-redux";
// import { updateContainerSize } from './actions';

function App() {

  // const dispatch = useDispatch();

  return (
    <>
      <div className='sitecontainer'>
        <div className='headerspace'>
          <Header />
        </div>
          
        <div className='bodyspace'>
          {/* <Sidebar /> */}
          <ControlBoard />
          {/* Have to put an empty div here, I think my 
          Controlboard elements are out of the DOM flow */}
          <Videodisplay />

        </div> 
      </div>
    </>
  );
}

export default App;