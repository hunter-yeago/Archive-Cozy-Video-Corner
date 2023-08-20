export function VideoAnchor(props) {
  
    return <a href={'https://www.youtube.com/watch?v=' + props.props.id.videoId} target="blank" rel="noopener noreferrer">
                Watch
            </a>;
  }

export default VideoAnchor;