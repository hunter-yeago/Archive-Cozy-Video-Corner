import VideoAnchor from "../VideoAnchor";
import './Videolist.scss';
export function Videolist(props) {

    return(
        <>
            <ul className="listcontainer">
                {props.vids.map(video => (

                <div className="container">
                    <div className="thumbnailcontainer">
                        <img className='thumbnail' src={video.snippet.thumbnails.default.url}></img>
                    </div>

                    <div className="videodetailsdiv">
                        <p className="videoname">{video.snippet.title}</p>
                        <p className="channelname">{video.snippet.channelTitle}</p>
                        <a className="watchanchor" key={video.id.videoId}>
                            <VideoAnchor props={video} />
                        </a>
                        
                        
                        {/* <p className="videodescription">{video.snippet.description}</p> */}

                        {/* Switch to this when you run out of API calls */}
                        {/* <p className="videoname"> A testing video name of a video thing</p>
                        <p className="channelname">Channel name</p>
                        <p className="videodescription">This is a long message of around 100 characters to show that this is the drescription of a video I found threw the API thanks you very mcuh</p> */}
                        
                        {/* Show Video in component */}
                        {/* <iframe
                        title={video.snippet.title}
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${video.id.videoId}`}
                        frameBorder="0"
                        allowFullScreen
                        ></iframe> */}

                        {/* In order to get this information I need to update my API call */}
                        {/* https://stackoverflow.com/questions/27393842/contentdetails-or-duration-not-coming-using-youtube-v3-api */}
                        {/* <p>{video.contentDetails.duration}</p> */}

                        {/* Buttons to send info to console */}
                        {/* <button onClick={console.log(video.snippet.thumbnails)}>Button</button> */}
                        {/* <button onClick={console.log(Object.keys(video.snippet))}>click</button> */}
                        {/* <button onClick={console.log(Object.keys(video.snippet))}>click</button> */}
                    </div>
                    {/* <div className="rightside">
                        <p key={video.id.videoId}>
                            <VideoAnchor props={video} />
                        </p>
                    </div> */}
                    
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