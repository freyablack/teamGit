import React, { useState } from "react";
import "./App.css";
import TicketMaster from "./components/Ticket Master/TicketMaster";
import 'reactstrap'
import Weather from './components/Weather/Weather'


function App() {

  const [Latitude, setLatitude] = useState("");
  const [Longitude, setLongitude] = useState("");
  // const [loc, setLoc] = useState([]);

  const componentDidMount = (props) => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(
        "Latitude is:",
        position.coords.latitude,
        setLatitude(position.coords.latitude)
      );
      console.log(
        "Longitude is:",
        position.coords.longitude,
        setLongitude(position.coords.longitude)
      );
      console.log(Latitude, Longitude);
    });



  };
  return (
    <div>
      {componentDidMount()}
      {/* <TicketMaster lat={Latitude} lon={Longitude} /> */}
      <Weather lat={Latitude} lon={Longitude}/>
    </div>
  );
}

export default App;