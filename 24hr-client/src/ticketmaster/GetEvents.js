import React, { useState } from "react";
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';
// https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=o5RpMXvmYAbA3yyrOPeVdGCM6bF

const styling = {
  display: 'flex',
  width: '50%',
  flexAlign: 'center',
}

const TicketMaster = (props) => {
    // const fetchResults = () => {
    //     let url = 'https://app.ticketmaster.com/discovery/v2/events?apikey=XYGJ8DZ9SPA05yMT8JUjOdSKSSVUHZKM&locale=*';
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(json => console.log(json))
    //   }
    //   fetchResults();
    const events = async () => {
      let url = `https://app.ticketmaster.com/discovery/v2/events?apikey=o5RpMXvmYAbA3yyrOPeVdGCM6bFAnOe1&latlong=${props.latitude},${props.longitude}&locale=*`;
      fetch(url)
        .then((res) => res.json())
        .then((json) => {
          console.log(json._embedded.events);
          return json
        });
    };
    // let event1 = json._embedded.events[0]
    // if (lat !== undefined && lon !== undefined){
  events();
  return (
    <div>
      {props.lat}
      <br />
      {props.lon}
      <br />
      <form>
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Event Image" />
        <CardBody>
          <CardTitle tag="h5">What are we doing?</CardTitle>
          <CardText>This is where our event would go. IF WE HAD ONE</CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Event Image" />
        <CardBody>
          <CardTitle tag="h5">Re-Learning React</CardTitle>
          <CardText>This is where our event would go. IF WE HAD ONE</CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Event Image" />
        <CardBody>
          <CardTitle tag="h5">How to fetch 101</CardTitle>
          <CardText>This is where our event would go. IF WE HAD ONE</CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardBody>
      </Card>
      <Button color="secondary" size="sm">Previous Page</Button>{' '}
    <Button color="secondary" size="sm">Next Page</Button>
      </form>
    </div>
  );
};
export default TicketMaster;