import './Sidebar.scss';
import { connect } from 'react-redux';
// import React, { useState } from 'react';
import Videolist from "../Videolist/Videolist";
import Searchbar from '../Searchbar/Searchbar';

export function Sidebar(props) {

    console.log('firing from  Sidebar')
    console.log(props);
    console.log('props is avilable is ')
    console.log(props.vidsAvailable)

   if (!props.avail) {
    console.log('firing sidebar without videolist')
    console.log(props);
    return ( 
        <>
        <div className='outerverticalcontainer'>
        {/* Hidden Panel     */}
        <div className='hiddenpanel'>
        <Searchbar />
        </div>

        {/* Inside the Sidebar  */}
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="search"><g data-name="Layer 2"><path d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z" data-name="search"></path></g></svg></a>
            
        </div>
        </>   
        
    )
   } else {
    console.log('firing sidebar WITH videolist')
    console.log(props);
    return (
        <>
            <div className='outerverticalcontainer'>
            {/* Hidden Panel     */}
            <div className='hiddenpanel'>
            <Searchbar />
            <Videolist />

            </div>
            {/* Inside the Sidebar  */}
                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="search"><g data-name="Layer 2"><path d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z" data-name="search"></path></g></svg></a>
            </div>
        </>   
    )
   }

}

// The problem was I messed up me exports / imports... always double check that!
const mapStateToProps = (state) => {
    return { avail: state.vidsAvailable};
  };

  export default connect(mapStateToProps)(Sidebar);