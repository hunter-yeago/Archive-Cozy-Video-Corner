export function VideoAnchor(props) {
    return <a href={'https://www.youtube.com/watch?v=' + props.props.id.videoId}>
                <p>Click here to watch</p>
            </a>;
  }

export default VideoAnchor;