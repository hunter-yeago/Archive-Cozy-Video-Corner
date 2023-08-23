import './Sidebar.scss';
import { connect } from 'react-redux';
import Videolist from '../Videolist/Videolist';
import Searchbar from '../Searchbar/Searchbar';
import { useState } from 'react';

export function Sidebar(props) {

    const [windowVisibility, setVisibility] = useState("displaypanel");

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
                <button className='barbutton' onClick={handleSearchToggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill = "#e3e4e5" viewBox="0 0 24 24" id="search"><g data-name="Layer 2"><path d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z" data-name="search"></path></g></svg>
                </button>
                <button className='barbutton' onClick={handleSearchToggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill = "#e3e4e5" viewBox="0 0 24 24" id="search"><g data-name="Layer 2"><path d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z" data-name="search"></path></g></svg>
                </button>
                <button className='barbutton' onClick={handleSearchToggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill = "#e3e4e5" viewBox="0 0 24 24" id="search"><g data-name="Layer 2"><path d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z" data-name="search"></path></g></svg>
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
            
            <div className="innervideolistdiv" >
            
            <div className="marginvideolistdiv" ><Videolist /></div>
            </div>


            </div>
            {/* Inside the Sidebar  */}
            <button className='barbutton' onClick={handleSearchToggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill = "#e3e4e5" viewBox="0 0 24 24" id="search"><g data-name="Layer 2"><path d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z" data-name="search"></path></g></svg>
                </button>
                <button className='barbutton' onClick={handleSearchToggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill = "#e3e4e5" viewBox="0 0 24 24" id="search"><g data-name="Layer 2"><path d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z" data-name="search"></path></g></svg>
                </button>
                <button className='barbutton' onClick={handleSearchToggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill = "#e3e4e5" viewBox="0 0 24 24" id="search"><g data-name="Layer 2"><path d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z" data-name="search"></path></g></svg>
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