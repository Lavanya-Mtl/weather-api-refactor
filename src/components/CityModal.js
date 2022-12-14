import Fuse from 'fuse.js';
import { useContext, useState } from 'react';
import Modal from 'react-modal';
import weatherData from "../weatherData";
import toast, { Toaster } from "react-hot-toast";
import FavoriteCityContext from '../context';
const fuse = new Fuse(weatherData, {keys:['name']});
    
function CityModal(props) {
    const [searchString,setSearchString] = useState('');
    const {favoriteCities,setFavoriteCities} = useContext(FavoriteCityContext);
  
    let resultCities=[];
    function addFavorite(city) {
        console.log(favoriteCities);
        let newArr=favoriteCities.concat([city])
        setFavoriteCities(newArr);
        toast.success("City added to favorites!");
    }

    function removeFavorite(city) {
        let filteredArray = favoriteCities.filter(function(e) { return e !== city })
        setFavoriteCities(filteredArray);
        toast.success("City removed from favorites!");
    }

    function SearchCities(e) {
        setSearchString(e.target.value);
    }

    if (searchString==='') {
        resultCities=weatherData;
    } else {
        resultCities = fuse.search(searchString).map(city=>city.item);
    }

    return (
        <>
            <Modal isOpen={props.addView} onRequestClose={props.closeModal} contentLabel="Example Modal" shouldCloseOnOverlayClick={false}>
            <div className='SearchDiv'>
                <div className='input-group'>
                    <label htmlFor='searchInput'>Search City</label>
                    <input id='searchInput' onChange={SearchCities} type='text'/>
                </div>
            </div>

                {
                    resultCities&&resultCities.map((city)=> {
                        return (
                            <div key={city.id} className="modal-item">
                                <div className='modal-city'>{city.name}</div>
                                {favoriteCities.includes(city.name)? 
                                    <button onClick={()=>removeFavorite(city.name)} className='modal-btn-add-cities'>-</button>
                                    :
                                    <button onClick={()=>addFavorite(city.name)} className='modal-btn-add-cities'>+</button>
                                }
                                <Toaster/>
                            </div>
                        )
                    })
                }
            </Modal>
        </>
    );
}
export default CityModal;