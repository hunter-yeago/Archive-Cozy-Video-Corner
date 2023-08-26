import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Videodisplay from './components/VideoDisplay/Videodisplay';
import './styles/App.scss';
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
          <Sidebar />
          <Videodisplay />

{/* New comments */}
          {/* <div className='buttondiv'>
            <button onClick={() => {dispatch(updateContainerSize("videocontainerfullsize"))}}>Full Width</button>
            <button onClick={() => {dispatch(updateContainerSize("videocontainer"))}}>Half and Half</button>
            <button onClick={() => {dispatch(updateDisplayVideoAvailability(false))}}>Remove Video</button>
          </div>  */}

        </div> 
      </div>
    </>
  );
}

export default App;