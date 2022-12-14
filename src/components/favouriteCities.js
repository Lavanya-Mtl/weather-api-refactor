import FavouriteCity from "./favouriteCity";
import weatherData from "../weatherData";

function FavouriteCities(props) { //props.cities is an array of names of favourite cities
    let data;

    props.cities.length===0? 
        data=(<h3>You have not selected any city as favorite yet</h3>)
        :
        data=(
            <div className="home-fav-container">
                {
                    props.cities.map((city)=>{
                        const cityData = weatherData[weatherData.findIndex((item)=>item.name===city)];
                        return (
                            <FavouriteCity cityData={cityData} key={cityData.id}/>
                        );
                    })
                }
            </div>
        ); 
    return data
}
export default FavouriteCities;