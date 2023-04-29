import VideoAnchor from "../VideoAnchor";
import './Videolist.scss';
export function Videolist(props) {

    return(
        <>
            <ul className="listcontainer">
                {props.vids.map(video => (
                // Video Name
                <div className="container">
                    <div className="videodetailsdiv">
                        <p className="videoname">{video.snippet.title}</p>
                        <p className="channelname">{video.snippet.channelTitle}</p>
                        <p className="videodescription">{video.snippet.description}</p>
                        {/* In order to get this information I need to update my API call */}
                        {/* https://stackoverflow.com/questions/27393842/contentdetails-or-duration-not-coming-using-youtube-v3-api */}
                        {/* <p>{video.contentDetails.duration}</p> */}
                        <button onClick={console.log(Object.keys(video.snippet))}>click</button>
                        </div>
                    {/* Channel Name */}
                    {/* <div className="rightside"></div> */}
                    

                    {/* <p key={video.id.videoId}>
                    <button onClick={console.log(Object.keys(video.snippet))}>click</button>
                    <VideoAnchor props={video} />
                    </p> */}
                </div>
                ))}
            </ul>
        </>
    )
}

export default Videolist;

                    // The actual video
                    {/* <iframe
                        title={video.snippet.title}
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${video.id.videoId}`}
                        frameBorder="0"
                        allowFullScreen
                    ></iframe> */}
                    {/* Date of Publishing */}
                    {/* <li>{video.snippet.publishTime}</li> */}
                    {/* Description */}
                    {/* <li>{video.snippet.description}</li> */}
                    {/* Thumbnail */}
                    {/* <li>{video.snippet.thumbnails}</li> */}