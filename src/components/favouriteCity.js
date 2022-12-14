function FavouriteCity(props) {
    return (
        <div className="home-fav-city">
            <div className="header"><div className="heading">{props.cityData.name}</div></div>
            <hr />
            <div className="city-data">
                <div className="desc">{props.cityData.desc}</div>
                <div className="temp">Temperature:{props.cityData.temp}</div>
            </div>
        </div>
    );
}
export default FavouriteCity;