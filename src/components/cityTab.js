import { useState } from "react";
import CityModal from "./CityModal";
import FavoriteCityContext from "../context";
import { useContext } from "react";
import weatherData from "../weatherData";
function CityTab() {
    const [isModalOpen, setModalOpen] = useState(false);
    let cityData=[];
    function openModal() {
        setModalOpen(true);
    }
    function closeModal() {
        setModalOpen(false);
    }
    const {favoriteCities,setFavoriteCities} = useContext(FavoriteCityContext);
    const [selected, setSelected] = useState('');
    function selectCity(city) {
        cityData = weatherData[weatherData.findIndex(item=>item.name===city)];
        setSelected(cityData);
    }
    return (
        <>
        <div className="side-panel">
            <div className="header">
                <div className="heading">Cities</div>
                <button className="btn-add-cities" onClick={openModal}>+</button>
                <CityModal addView={isModalOpen} closeModal={closeModal} />
            </div>
            <hr />
            {
                favoriteCities.length===0?
                    <p className="message">You have not selected any city yet</p>
                :
                    favoriteCities.map((city)=>{
                        return (
                            <div className="added-city" key={city} onClick={()=>{selectCity(city)}}>
                                <div>{city}</div>
                                <div className="temp-grey">
                                    {weatherData[weatherData.findIndex(item=>item.name===city)].temp}
                                </div>
                            </div>
                        )
                    })
            }
            
        </div>
        <div className="side-panel">
            {selected===''? <p className="message">Select a city to view weather conditions</p>:
            <div>
            <div className="header">
                <div className="heading">{selected.name}</div>
                <div>*</div>
                
            </div>
           <hr />
           <div className="city-data">
            <div className="desc">{selected.desc}</div>
            <div className="temp">Temperature: {selected.temp}</div>
            </div>
            </div>
            }
        </div>
        </>
    );

}
export default CityTab;