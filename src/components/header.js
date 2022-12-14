import { useState } from "react"
import CityModal from "./CityModal";
function Header() {
    
    const [addView,setAddView] = useState(false);
  
    function openModal() {
        setAddView(true);
    }
    function closeModal() {
        setAddView(false)
    }
    return (
        <div className="header">
            <div className="heading">My Favourite Cities</div>
            <button onClick={openModal} className="btn-new-cities">Add new Cities</button>
            <CityModal addView={addView} closeModal={closeModal} />
        </div>
    )
}
export default Header