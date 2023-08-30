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
            <>
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
         </>
        )
    } 
    else {
        return(
            <>
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
            </>
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