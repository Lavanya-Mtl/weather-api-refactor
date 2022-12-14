import CityTab from "./cityTab";
import Sidebar from "./sidebar";

function CityPage() {
    return (
        <>
            <Sidebar activeTab='city'/>
            <div className='content'>
                <CityTab />
                
            </div>
        </>
    )
}
export default CityPage;