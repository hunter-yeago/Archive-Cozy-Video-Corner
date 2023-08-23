import VideoAnchor from "../VideoAnchor";
import './Videolist.scss';
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import {updateVideoDisplay, updateDisplayVideoAvailability} from "../../actions";
import { useEffect } from "react";
export function Videolist(props) {

    const dispatch = useDispatch();
    // console.log('firing from videolist main');
    console.log(props);
    console.log(props.vids.vids);

    

    function displayVideo(video) {
        // console.log('firing display video function');
        dispatch(updateVideoDisplay(video));
        dispatch(updateDisplayVideoAvailability(true));
    }

        return(
            <>
                <ul className="listcontainer">
                    { props.vids.vids.map(video => (
    
                    <button onClick={() => displayVideo(video)} className="container">
                        {/* <div className="thumbnailcontainer">
                            <img className='thumbnail' src={video.snippet.thumbnails.default.url}></img>
                        </div> */}
    
                        <div className="videodetailsdiv">
                            <div className="videonamediv">
                                <h1 className="videoname">{video.snippet.title}</h1>
                            </div>
                            
                            <div className="channelnamediv">
                                <p className="channelname">{video.snippet.channelTitle}</p>
                            </div>
                        </div>
                            {/* <p className="channeldescription"></p> */}
                            <p className="videodescription">{video.snippet.description}</p>
                            
                            
    
                            {/* Switch to this when you run out of API calls */}
                            {/* <p className="videoname"> A testing video name of a video thing</p>
                            <p className="channelname">Channel name</p>
                            <p className="videodescription">This is a long message of around 100 characters to show that this is the drescription of a video I found threw the API thanks you very mcuh</p> */}
    
                            {/* In order to get this information I need to update my API call */}
                            {/* https://stackoverflow.com/questions/27393842/contentdetails-or-duration-not-coming-using-youtube-v3-api */}
                            {/* <p>{video.contentDetails.duration}</p> */}
    
                            {/* Buttons to send info to console */}
                            {/* <button onClick={console.log(video.snippet.thumbnails)}>Button</button> */}
                            {/* <button onClick={console.log(Object.keys(video.snippet))}>click</button> */}
                        
                        
                    </button>
                    ))}
                </ul>
            </>
        )
   
}

const mapStateToProps = (state) => {
    return { 
        vids: state.vids,
    };
  }

export default connect(mapStateToProps)(Videolist);