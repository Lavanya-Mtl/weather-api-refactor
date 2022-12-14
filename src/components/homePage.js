import Sidebar from "./sidebar";
import Header from "./header";
import FavouriteCities from "./favouriteCities";
import FavoriteCityContext from "../context";
import { useContext } from "react";
function HomePage() {
    const citycontext = useContext(FavoriteCityContext);
    return (
        <>
            <Sidebar activeTab='home'/>
            <div className='home-content'>
                <Header />
                <FavouriteCities cities={citycontext.favoriteCities}/>
            </div>
        </>
    );
}
export default HomePage;