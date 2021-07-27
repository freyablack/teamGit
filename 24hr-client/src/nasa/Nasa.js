import React, {useState} from "react";
// import nasa from './nasa.css'
import Placeholder from '../assets/placeholder.jpg'

const nasaImg = {
  width: '500px',
  height: '300px',
  border: '1px solid black',
  borderRadius: '15px',
}


const Nasa = (props) => {
    const [img, setImg] = useState();
    let lat = props.lat;
    let lon = props.lon;
    const fNasa = async () =>{
        const keyNASA = 'fDlSGKBjFD44jIJikvsjZgW7LexhU77K74Jf3M6s';
        const URL = `https://api.nasa.gov/planetary/earth/assets?lon=${lon}&lat=${lat}&api_key=${keyNASA}`;
        fetch(URL)
            .then(res => res.json())
            .then(json => {
                fun(json.url)
            })
    }
    if (lat !== undefined && lon !== undefined){
        fNasa()
    }
    function fun (json) {
        setImg(json)
    }
        return(
        <div className="NasaImg-inner">
            <h3 style={{textAlign: "center"}}>Here's a satellite image of your location, provided by NASA</h3>
            <img
            style={nasaImg}
            alt="IMG" 
            src={Placeholder} 
            className="NasaImg"/>
        </div>
    );
};
export default Nasa;