import './Videodisplay.scss';
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from 'react';
import { updateDisplayVideoAvailability} from '../../actions';

export function Videodisplay(props) {

    const dispatch = useDispatch();
    const [videoContainerSizeClass, updateVideoContainerClass] = useState('videocontainer');

    function removeVideo() {
            dispatch(updateDisplayVideoAvailability(false));
    }
    if (!props.avail.displayVideoAvailable) { 
        return(
            <>
                <div className='shelf'>
                    <div className='videoandbuttoncontainer'>
                        <div className={videoContainerSizeClass}>
                            <div className='videoplayer'></div>
                        </div>
                        <div className='controlbuttondiv'>
                            <button onClick={() => {updateVideoContainerClass('videocontainerfullsize')}}>Full Width</button>
                            <button onClick={() => {updateVideoContainerClass('videocontainer')}}>Half and Half</button>
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
                            {<iframe className='videoplayer'
                                title={props.video.vid.snippet.title}
                                src={`https://www.youtube.com/embed/${props.video.vid.id.videoId}`}
                                allow="fullscreen"
                                loading="lazy"
                            ></iframe>}

                    </div>
                    <div className='controlbuttondiv'>
                            <button onClick={() => {updateVideoContainerClass('videocontainerfullsize')}}>Full Width</button>
                            <button onClick={() => {updateVideoContainerClass('videocontainer')}}>Half and Half</button>
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
        avail: state.displayVideoAvailable
    };
  }

export default connect(mapStateToProps)(Videodisplay);