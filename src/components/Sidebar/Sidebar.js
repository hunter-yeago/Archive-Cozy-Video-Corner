import './Sidebar.scss';
import { connect } from 'react-redux';
// import React, { useState } from 'react';
import Videolist from "../Videolist/Videolist";
import Searchbar from '../Searchbar/Searchbar';
import React, { useState } from 'react';

import { useDispatch } from "react-redux";

export function Sidebar(props) {

    const [windowVisibility, setVisibility] = useState("displaypanel");
    const dispatch = useDispatch();

    function handleSearchToggle() {
        if (windowVisibility === "displaypanel") {
            setVisibility("hiddenpanel")
        } else {
            setVisibility("displaypanel");
        }
    }

   if (!props.avail) {
    return ( 
        <>
            <div className='outerverticalcontainer'>
           
                {/* Inside the Sidebar  */}
                <button onClick={handleSearchToggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="search"><g data-name="Layer 2"><path d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z" data-name="search"></path></g></svg>
                </button>

                {/* Hidden Panel     */}
                <div className={windowVisibility}>
                    <Searchbar />
                </div>
            </div>
        </>   
        
    )
   } else {
    return (
        <>
            <div className='outerverticalcontainer'>
            {/* Hidden Panel     */}
            <div className={windowVisibility}>
            <Searchbar />
            <Videolist />

            </div>
            {/* Inside the Sidebar  */}
                <button onClick={handleSearchToggle}>
                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="search"><g data-name="Layer 2"><path d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z" data-name="search"></path></g></svg></a>
                </button>
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