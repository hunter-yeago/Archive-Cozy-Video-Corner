export function VideoAnchor(props) {
  
    return <a href={'https://www.youtube.com/watch?v=' + props.props.id.videoId}>
                <p>Watch</p>
            </a>;
  }

export default VideoAnchor;