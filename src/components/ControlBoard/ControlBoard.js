import './ControlBoard.scss';
import Sidebar from '../Sidebar/Sidebar';
import DisplayPanel from '../DisplayPanel/DisplayPanel';
import { useState } from 'react';
import { connect } from 'react-redux';
import { updateDisplayPanelStatus } from '../../actions';
import { useDispatch } from "react-redux";

export function ControlBoard(props) {

    const [panel, setPanel] = useState("info")
    const [activeTab, setActiveTab] = useState("info");
    const [display, setDisplay] = useState(props.panelStatus)
    const dispatch = useDispatch();
    
    // If global panelStatus is different, update local status
    if (props.panelStatus !== display) {
        setDisplay(props.panelStatus);
        
        //This brings back the 'active selection'
        //on the sidebar buttons when clicking
        //full width and half and half buttons in video display
        if (props.panelStatus === 'displaypanel') {
            setActiveTab(panel);
        } else {
            setActiveTab("");
        }
    }

    function updatePanelView(button) {
        const id = button.target.id;
        
        //Update local panel
        setPanel(id);
        setActiveTab(id)

        //If hidden, show it
        if (display === 'hiddenpanel') {
            dispatch(updateDisplayPanelStatus('displaypanel'));
            
        //If it's the same panel, hide it
        } else if (id === panel) {
            dispatch(updateDisplayPanelStatus('hiddenpanel'));
            setActiveTab("");
        }
    }

    return (
        <div className=''>
            <Sidebar 
                handler={updatePanelView}
                tab={activeTab}
            />            
            <DisplayPanel 
            panelClass={display}
            panel={panel}
            handler={updatePanelView}
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