import './Videolist.scss';
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import {updateVideoDisplay, updateDisplayVideoAvailability} from "../../actions";
export function Videolist(props) {

    const dispatch = useDispatch();
    
    function displayVideo(video) {
        dispatch(updateVideoDisplay(video));
        dispatch(updateDisplayVideoAvailability(true));
    }

        return(
            <ul className="listcontainer">
                { props.vids.vids.map(video => (
                    <li key={video.id.videoId}>
                        <button onClick={() => displayVideo(video)} className="container">
                            <div className="videodetailsdiv">
                                <div className="videonamediv">
                                    <h1 className="videoname">{video.snippet.title}</h1>
                                </div>
                                
                                <div className="channelnamediv">
                                    <p className="channelname">{video.snippet.channelTitle}</p>
                                </div>
                            </div>
                                <p className="videodescription">{video.snippet.description}</p>      
                        </button>
                    </li>   


                ))}
            </ul>
        )
   
}

const mapStateToProps = (state) => {
    return { 
        vids: state.vids,
    };
  }

export default connect(mapStateToProps)(Videolist);