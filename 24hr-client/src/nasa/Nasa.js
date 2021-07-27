import React, {  useState } from "react";
import "./nasa.css";
import { Container, Button } from "reactstrap";

const Location = () => {
    const [longitude, setLongitude] = useState('');
    const [latitude, setLatitude] = useState('');
    const [img, setImg] = useState("");
    const [load, setLoad] = useState('')

  const getLocation = () => {
    // setLoad(true)
    if (navigator.geolocation) {
      const position = (position) => {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        setLongitude(long);
        setLatitude(lat);
        let baseURL = `https://api.nasa.gov/planetary/earth/imagery?lon=${long}&lat=${lat}&date=2020-06-01&dim=0.15&api_key=fDlSGKBjFD44jIJikvsjZgW7LexhU77K74Jf3M6s`;
        fetch(baseURL)
          .then((res) => {
            return res.blob();
          })
          .then((json) => {
            let obj = URL.createObjectURL(json);
            setImg(obj);
          });
        };
        navigator.geolocation.getCurrentPosition(position);
    }
  };

  const buttonStyling = {
    backgroundColor: 'lightgreen',
    color: 'black',
    marginBottom: '10px',
    marginTop: '50px'
  }

  const imgStyle = {
    marginBottom: '50px'
  }

  return (
    <Container className="mainDiv">
          <Button style={buttonStyling} onClick={getLocation}>Acquire Position</Button>
          <br />
        <img style={imgStyle}src={img} alt="" width="500px"></img>
    </Container>
  );
};
export default Location;