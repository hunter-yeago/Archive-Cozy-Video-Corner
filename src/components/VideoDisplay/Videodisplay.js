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
<<<<<<< HEAD
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
=======
                { props.vids[0].vids.map(video => (
                    <div className='shelf'>
                        {/* <h1> Your Cozy Corner Viewing Area</h1> */}
                        <div className="videocontainer">
                        {/* The Video */}
                        {<iframe className='videoplayer'
>>>>>>> 4a24c6c... created better designing of the design
                                    title={video.snippet.title}
                                    src={`https://www.youtube.com/embed/${video.id.videoId}`}
                                    allow="fullscreen"
                                    loading="lazy"
<<<<<<< HEAD
                            ></iframe>} */}
                        {/* Description */}
                        {/* <li>{video.snippet.description}</li> */}
                     {/* </div>
                        </div>
                ))} */}
=======
                            ></iframe>}
                        {/* Description */}
                        {/* <li>{video.snippet.description}</li> */}
                </div>
                    </div>
                
                ))}
>>>>>>> 4a24c6c... created better designing of the design
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