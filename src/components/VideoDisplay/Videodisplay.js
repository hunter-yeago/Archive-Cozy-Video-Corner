import './Videodisplay.scss';
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from 'react';
import { updateDisplayVideoAvailability, updateDisplayPanelStatus} from '../../actions';

export function Videodisplay(props) {

    //Here's the idea:
    //In order to get the display to always be "half and half" to speak or go
    //always have a good ratio between the video display and the side bar display window
    // I should just have the left side be one div and the right side be another
    // and then have them in a grid where the left is always 30% and the right 70% or
    //whatever, and to have the display window just take up whatever is left avaialable
    // of that 30% div

    const dispatch = useDispatch();
    const [videoContainerSizeClass, updateVideoContainerClass] = useState('videocontainer');

    function showFullSizeVideoDisplay() {
        updateVideoContainerClass('videocontainerfullsize');
        dispatch(updateDisplayPanelStatus("hiddenpanel"));
    }

    function showHalfandHalfVideoDisplay() {
        updateVideoContainerClass('videocontainer');
        dispatch(updateDisplayPanelStatus("displaypanel"));
    }

    function removeVideo() {
            dispatch(updateDisplayVideoAvailability(false));
    }

    if (!props.avail.displayVideoAvailable) { 
        return(
            <div className='shelf'>
                <div className='videoandbuttoncontainer'>
                    <div className={videoContainerSizeClass}>
                    {/* <div className={props.size.containerSize}> */}
                        <div className='videoplayer'>
                        </div>
                    </div>
                    <div className='controlbuttondiv'>
                        <button onClick={() => {showFullSizeVideoDisplay()}}>Full Width</button>
                        <button onClick={() => {showHalfandHalfVideoDisplay()}}>Half and Half</button>
                        <button onClick={removeVideo}>Remove Video</button>
                    </div>  
                </div>
            </div>
        )
    } 
    else {
        return(
            <div className='shelf'>
                <div className='videoandbuttoncontainer'>
                    <div className={videoContainerSizeClass}>
                    {/* <div className={props.size.containerSize}> */}
                        {<iframe className='videoplayer'
                            title={props.video.vid.snippet.title}
                            src={`https://www.youtube.com/embed/${props.video.vid.id.videoId}`}
                            allow="fullscreen"
                            loading="lazy"
                        ></iframe>}
                    </div>
                    <div className='controlbuttondiv'>
                        <button onClick={() => {showFullSizeVideoDisplay()}}>Full Width</button>
                        <button onClick={() => {showHalfandHalfVideoDisplay()}}>Half and Half</button>
                        <button onClick={removeVideo}>Remove Video</button>
                    </div>
                </div>
            </div>                
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        video: state.displayVideo,
        avail: state.displayVideoAvailable,
        size: state.containerSize
    };
  }

export default connect(mapStateToProps)(Videodisplay);


//    if (!props.videoListIsAvialable) {
//     return ( 
//         <>
//             <div className='outerverticalcontainer'>
//                 {/* Inside the Sidebar  */}
//                 <button className='barbutton' id="search" onClick={handleSearchToggle.bind(this)}>
//                     <svg className= "sidebarsvg"  xmlns="http://www.w3.org/2000/svg" fill = "#e3e4e5" viewBox="0 0 24 24"><g data-name="Layer 2"><path d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z" data-name="search"></path></g></svg>
//                 </button>
//                 <button className='barbutton' id="info" onClick={handleSearchToggle.bind(this)}>
//                     <svg className= "sidebarsvg" xmlns="http://www.w3.org/2000/svg" fill = "#e3e4e5" data-name="Layer 1" viewBox="0 0 24 24"><path d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Zm0-8.5a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0v-3A1,1,0,0,0,12,11.5Zm0-4a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,12,7.5Z"></path></svg>
//                 </button>

//                 {/* Hidden Panel     */}
//                 {/* <div className={props.status}> */}
//                 <div className={display}>
//                     <Searchbar />
//                 </div>
//             </div>
//         </>   
//     )
//    } else {
//     return (
//         <>
//             <div className='outerverticalcontainer'>
//                 <SearchPanel />
//                 {/* Inside the Sidebar  */}
//                 <button className='barbutton'  id="search" onClick={handleSearchToggle.bind(this)}>
//                     <svg className= "sidebarsvg" xmlns="http://www.w3.org/2000/svg" fill = "#e3e4e5" viewBox="0 0 24 24" id="search"><g data-name="Layer 2"><path d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z" data-name="search"></path></g></svg>
//                 </button>
//                 <button className='barbutton' id="info" onClick={handleSearchToggle.bind(this)}>
//                     <svg className= "sidebarsvg" xmlns="http://www.w3.org/2000/svg" fill = "#e3e4e5" data-name="Layer 1" viewBox="0 0 24 24" id="information-sign"><path d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Zm0-8.5a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0v-3A1,1,0,0,0,12,11.5Zm0-4a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,12,7.5Z"></path></svg>
//                 </button>
//             </div>
//         </>   
//     )
//    }
// }

// The problem was I messed up me exports / imports... always double check that!
// const mapStateToProps = (state) => {
//     return { 
//         videoListIsAvialable: state.videoListAvailable,
//         status: state.displayPanelStatus.displayPanelStatus,
//     };
//   };