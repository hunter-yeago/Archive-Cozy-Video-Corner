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
                        <div className="container">
                                {/* The Video */}
                                {<iframe
                                            title={video.snippet.title}
                                            width="560"
                                            height="315"
                                            src={`https://www.youtube.com/embed/${video.id.videoId}`}
                                            frameBorder="0"
                                            allowFullScreen
                                    ></iframe>}
                                {/* Description */}
                                <li>{video.snippet.description}</li>
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