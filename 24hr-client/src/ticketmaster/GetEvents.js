import React, {useState} from "react";
const TicketMaster = (props) => {
    const [name1, setName1] = useState("");
    const [name2, setName2] = useState("");
    const [name3, setName3] = useState("");
    const [name4, setName4] = useState("");
    const [name5, setName5] = useState("");
    const [url1, setUrl1] = useState("");
    const [url2, setUrl2] = useState("");
    const [url3, setUrl3] = useState("");
    const [url4, setUrl4] = useState("");
    const [url5, setUrl5] = useState("");
    const [localDate1, setLocalDate1] = useState("");
    const [localDate2, setLocalDate2] = useState("");
    const [localDate3, setLocalDate3] = useState("");
    const [localDate4, setLocalDate4] = useState("");
    const [localDate5, setLocalDate5] = useState("");
    const [localTime1, setLocalTime1] = useState("");
    const [localTime2, setLocalTime2] = useState("");
    const [localTime3, setLocalTime3] = useState("");
    const [localTime4, setLocalTime4] = useState("");
    const [localTime5, setLocalTime5] = useState("");
    let fetchF= () => {
  let dinamicUrl = `https://app.ticketmaster.com/discovery/v2/events.json?size=10&latlong=41.087180,41.087180&apikey=qzzKEgcC2nKGZoQOuCGFvSSalQDvzIOO`;
        fetch(dinamicUrl)
            .then((res) => res.json())
            .then((data) => {
                setName1(data._embedded.events[0].name);
                setName2(data._embedded.events[1].name);
                setName3(data._embedded.events[2].name);
                setName4(data._embedded.events[3].name);
                setName5(data._embedded.events[4].name);
                setUrl1(data._embedded.events[0].url);
                setUrl2(data._embedded.events[1].url);
                setUrl3(data._embedded.events[2].url);
                setUrl4(data._embedded.events[3].url);
                setUrl5(data._embedded.events[4].url);
                setLocalDate1(data._embedded.events[0].dates.start.localDate);
                setLocalDate2(data._embedded.events[1].dates.start.localDate);
                setLocalDate3(data._embedded.events[2].dates.start.localDate);
                setLocalDate4(data._embedded.events[3].dates.start.localDate);
                setLocalDate5(data._embedded.events[4].dates.start.localDate);
                setLocalTime1(data._embedded.events[0].dates.start.localTime);
                setLocalTime2(data._embedded.events[1].dates.start.localTime);
                setLocalTime3(data._embedded.events[2].dates.start.localTime);
                setLocalTime4(data._embedded.events[3].dates.start.localTime);
                setLocalTime5(data._embedded.events[4].dates.start.localTime);
            });
    };
    fetchF()
    return (
      <div className="ticket">
        <p>
          <li>
            <ul className="tikets-inner">
              <li style={{listStyle: 'none'}}>{name1} <a href={url1}> Learn more</a> <p>{localDate1}&#9; {localTime1}</p></li>
              <li style={{listStyle: 'none'}}>{name2} <a href={url2}> Learn more</a> <p>{localDate2}&#9; {localTime2}</p></li>
              <li style={{listStyle: 'none'}}>{name3} <a href={url3}> Learn more</a> <p>{localDate3}&#9; {localTime3}</p></li>
              <li style={{listStyle: 'none'}}>{name4} <a href={url4}> Learn more</a> <p>{localDate4}&#9; {localTime4}</p></li>
              <li style={{listStyle: 'none'}}>{name5} <a href={url5}> Learn more</a> <p>{localDate5}&#9; {localTime5}</p></li>
            </ul>
          </li>
        </p>
      </div>
    );
}
export default TicketMaster;