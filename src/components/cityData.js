function CityData(props) {
    return (
        
        <div>
            <div>City: {props.city.name}</div>
            <div>{props.city.desc}</div>
            <div>Temperature: {props.city.temp}</div>
        </div>
    )
}
export default CityData;
