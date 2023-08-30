import './Sidebar.scss';

export function Sidebar(props) {

    return (
        <>
            <div className='outerverticalcontainer'>

                <button className={props.tab === "search" ?  'activebarbutton' : 'barbutton'}  
                    id="search" 
                    onClick={props.handler.bind(this)}>
                    <svg className= "sidebarsvg" xmlns="http://www.w3.org/2000/svg" fill = "#e3e4e5" viewBox="0 0 24 24" id="search"><g data-name="Layer 2"><path d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z" data-name="search"></path></g></svg>
                </button>

                <button className={props.tab === "info" ?  'activebarbutton' : 'barbutton'}  id="info" onClick={props.handler.bind(this)}>
                    <svg className= "sidebarsvg" xmlns="http://www.w3.org/2000/svg" fill = "#e3e4e5" data-name="Layer 1" viewBox="0 0 24 24" id="information-sign"><path d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Zm0-8.5a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0v-3A1,1,0,0,0,12,11.5Zm0-4a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,12,7.5Z"></path></svg>
                </button>

            </div>
        </>   
    )
}
  export default (Sidebar);