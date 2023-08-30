import './SearchPanel.scss';
import Searchbar from '../Searchbar/Searchbar';
import Videolist from '../Videolist/Videolist';
import { connect } from 'react-redux';

export function SearchPanel(props) {

  if (!props.videoListIsAvialable) { 
    return (
      <div className={props.status}>
          <Searchbar />
          <div className="innervideolistdiv" >            
              <div className="marginvideolistdiv" >
                  {/* <Videolist /> */}
              </div>
          </div>
      </div>
    )
  } else {
    return (
      <div className={props.status}>
          <Searchbar />
          <div className="innervideolistdiv" >            
              <div className="marginvideolistdiv" >
                  <Videolist />
              </div>
          </div>
      </div>
    )
  }

  }

  const mapStateToProps = (state) => {
    return { 
        videoListIsAvialable: state.videoListAvailable,
        status: state.displayPanelStatus.displayPanelStatus,
    };
  };

  export default connect(mapStateToProps)(SearchPanel);