import VideoAnchor from "../VideoAnchor";
export function Videolist(props) {
    return(
        <>
            <ul className="listcontainer">
                {props.vids.map(video => (
                <li key={video.id.videoId}>
                {/* <iframe
                    title={video.snippet.title}
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${video.id.videoId}`}
                    frameBorder="0"
                    allowFullScreen
                ></iframe> */}
                <p>{video.snippet.title}</p>
                    <VideoAnchor props={video} />
                </li>
                ))}
            </ul>
        </>
    )
}

export default Videolist;