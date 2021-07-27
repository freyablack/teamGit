import React from 'react'
import './App.css';
import Location from './nasa/Nasa';
import Footer from './Footer';
import TicketMaster from './ticketmaster/GetEvents';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar/Navbar'
import Weather from './weather/Weather';


function App() {
  

  return (
    <div className="App">
      <Navbar style={{background: 'black'}}/>
      <h1>24hr React App</h1>
      <Location />
      <h3>Thinking about heading out today? Make sure to check the weather first!</h3>
      <Weather />
      <h3>Here's a list of events going on near you, take a look and see if there's one you'd like to attend!</h3>
      <TicketMaster/>


      <Footer/>
    </div>
  );
}
export default App;