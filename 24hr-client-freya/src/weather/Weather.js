import React, {useState} from "react";
const Weather = (props) => {
    let lat = props.lat;
    let lon = props.lon;
    const fetchWeather = () =>{
        let url = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=61d7d42ffffba5f35d13cb7906e2e302`
        console.log(url)
          fetch(url)
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(err => console.log(err))
      }
        return(
        <div>
          {fetchWeather()}
          <p>Weather</p>
        {lat}
        <br />
        {lon}
        </div>
    );
}
export default Weather;