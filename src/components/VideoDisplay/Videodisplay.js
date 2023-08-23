import './Videodisplay.scss';
import { connect } from "react-redux";
export function Videodisplay(props) {

    if (!props.avail) {
        <></>
    } else {
        return(
            <>
                {/* Will eventually switch this to just the one chosen video */}
                { props.vids[0].vids.map(video => (
                    <div className='shelf'>
                        {/* <h1> Your Cozy Corner Viewing Area</h1> */}
                        <div className="videocontainer">
                        {/* The Video */}
                        {<iframe className='videoplayer'
                                    title={video.snippet.title}
                                    src={`https://www.youtube.com/embed/${video.id.videoId}`}
                                    allow="fullscreen"
                                    loading="lazy"
                            ></iframe>}
                        {/* Description */}
                        {/* <li>{video.snippet.description}</li> */}
                </div>
                    </div>
                
                ))}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        vids: state.vids,
        avail: state.vidsAvailable
    };
  }

export default connect(mapStateToProps)(Videodisplay);