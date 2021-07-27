import React, {useState} from "react";
const Weather = (props) => {
  const [temperature, setTemperature] = useState("");
  const [city, setCity] = useState("")
    let lat = props.lat;
    let lon = props.lon;
    const fetchWeather = () => {
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=d1c69bcbd773330e599cfa10363347b4`
        console.log(url)
          fetch(url)
            .then(res => res.json())
            .then(data => {
              console.log(data);
              //Change Kelvin to fahrenheit
              setTemperature((Math.round(data.main.temp - 273.15)) * 2 + 30)
              setCity(data.name)
            })
            .catch(err => console.log(err))
      };
        return(
        <div>
          {fetchWeather()}
          <p>Weather</p>
        <h4>
            You're currently located in {city}.
        </h4>
        <h4>
          The current temperature in your area is {temperature} degrees.
        </h4>
        </div>
    );
}
export default Weather;