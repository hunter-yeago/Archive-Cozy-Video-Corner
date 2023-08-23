import './Videodisplay.scss';
import { connect } from "react-redux";
export function Videodisplay(props) {

    // console.log('firing from video display main function');
    // console.log(props);
    if (!props.avail) { return (<></>)} 
    else {
        return(
            <>
                {/* Will eventually switch this to just the one chosen video */}
                {/* { props.vids.map(video => ( */}
                    <div className='shelf'>
                        <div className="videocontainer">
                        {/* The Video */}
                        {<iframe className='videoplayer'
                                    title={props.video.vid.snippet.title}
                                    src={`https://www.youtube.com/embed/${props.video.vid.id.videoId}`}
                                    allow="fullscreen"
                                    loading="lazy"
                            ></iframe>}
                        {/* Description */}
                        {/* <li>{video.snippet.description}</li> */}
                     </div>
                        </div>
                
                {/* ))} */}
                
                {/* { props.vids.vids.map(video => (
                    <div className='shelf'>
                        <div className="videocontainer"> */}
                        {/* The Video */}
                        {/* {<iframe className='videoplayer'
                                    title={video.snippet.title}
                                    src={`https://www.youtube.com/embed/${video.id.videoId}`}
                                    allow="fullscreen"
                                    loading="lazy"
                            ></iframe>} */}
                        {/* Description */}
                        {/* <li>{video.snippet.description}</li> */}
                     {/* </div>
                        </div>
                ))} */}
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