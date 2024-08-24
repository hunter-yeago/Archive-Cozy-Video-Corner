import './DisplayPanel.scss';
import SearchPanel from '../SearchPanel/SearchPanel';
import InfoPanel from '../InfoPanel/InfoPanel';

export function DisplayPanel(props) {

    return (
      <div className={props.panelClass}>
        {props.panel === "search" ? (
          <SearchPanel />
        ) : props.panel === "info" ? (
          <InfoPanel handler={props.handler}/>
        ) : <div></div>}
      </div>
    )
  }

export default DisplayPanel;