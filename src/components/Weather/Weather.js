import React, {useState} from "react";

const Weather = (props) => {

    const [temperature, setTemperature] = useState("");

    let lat = props.lat;
    let lon = props.lon;
    const fetchWeather = () => {
        
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=d1c69bcbd773330e599cfa10363347b4`
        console.log(url)
          fetch(url)
            .then(res => res.json())
            .then(json => console.log(json.weather[0]))
            .catch(err => console.log(err))
      };

      


        return(
        <div>
          {fetchWeather()}
          <p>Weather</p>
        {lat}
        <br />
        {lon}
        <br />
        <h4>
            The current temperature is
        </h4>
        </div>
    );
}
export default Weather;

