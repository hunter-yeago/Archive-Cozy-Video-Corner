import './ControlBoard.scss';
import Sidebar from '../Sidebar/Sidebar';
import DisplayPanel from '../DisplayPanel/DisplayPanel';
import { useState } from 'react';
import { connect } from 'react-redux';
import { updateDisplayPanelStatus } from '../../actions';
import { useDispatch } from "react-redux";

export function ControlBoard(props) {

    const [panel, setPanel] = useState("search")
    const [display, setDisplay] = useState(props.panelStatus)
    const dispatch = useDispatch();
    
    // If global panelStatus is different, update local status
    if (props.panelStatus !== display) {
        setDisplay(props.panelStatus);
    }

    function updatePanelView(button) {
        const id = button.target.id;
        
        //Update local panel
        setPanel(id);

        //If hidden, show it
        if (display === 'hiddenpanel') {
            dispatch(updateDisplayPanelStatus('displaypanel'));
            
        //If it's the same panel, hide it
        } else if (id === panel) {
            dispatch(updateDisplayPanelStatus('hiddenpanel'));
        }
    }

    return (
        <div className=''>
            <Sidebar handler={updatePanelView}/>            
            <DisplayPanel 
            panelClass={display}
            panel={panel}
            />
        </div>
    )
}

const mapStateToProps = (state) => {
    return { 
        panelStatus: state.displayPanelStatus.displayPanelStatus,
    };
  }

export default connect(mapStateToProps)(ControlBoard);