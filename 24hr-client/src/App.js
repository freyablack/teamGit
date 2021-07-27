import { useState, useEffect } from 'react';
import './App.css';
// import Weather from './weather/Weather';
import Nasa from './nasa/Nasa';
import Footer from './Footer';
import TicketMaster from './ticketmaster/GetEvents';

// const footer = {
//   position: 'absolute',
//   background: 'black',
//   width: '100%',
//   height: '100px',
//   marginTop: '100px'
// }

function App() {
  let [latitude, setLatitude] = useState()
  let [longitude, setLongitude] = useState()
  // const [loc, setLoc] = useState([])
  const componentDidMount = (e) => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLatitude(Number(position.coords.latitude));
      setLongitude(Number(position.coords.longitude));
      // setLoc([+Latitude.toFixed(2), +Longitude.toFixed(2)])
    });
  }
  useEffect(() => {
    componentDidMount()
},);
  return (
    <div className="App">
      <h1>24hr React App</h1>
      {/* <Nasa lat={latitude} lon={longitude}/> */}
      <h3>Thinking about heading out today? Make sure to check the weather first!</h3>
      {/* Weather App goes here! */}
      <h3>Here's a list of events going on near you, take a look and see if there's one you'd like to attend!</h3>
      <TicketMaster/>


      <Footer/>
    </div>
  );
}
export default App;