import { Link } from "react-router-dom";

/*function Sidebar(props) {
    function changeState(e) {
        props.activeTab.changeState(e.target.dataset.tab);
    }
    return (
        <div className="sidebar">
            <div data-tab="home" className="tab" id={props.activeTab.activeTab==='home'?"active":""} onClick={changeState}>
                Home
            </div>
            <div data-tab="city" className="tab" onClick={changeState} id={props.activeTab.activeTab==='city'?"active":""}>
                City
            </div>
        </div>
    );
}*/
function Sidebar(props) {
    
    return (
        <div className="sidebar">
            <Link to={'/'}>
                <div data-tab="home" className="tab" id={props.activeTab==='home'?"active":""}>
                    Home
                </div>
            </Link>
            <Link to='city'>
                <div data-tab="city" className="tab" id={props.activeTab==='city'?"active":""}>
                    City
                </div>
            </Link>
        </div>
    );
}
export default Sidebar;