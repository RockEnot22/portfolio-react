import React, { useEffect, useState } from "react";
import axios from "axios";
import "./popupWeather.css";
import Popup from "../general/Popup";

const PopupWeather = () => {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState({});

  useEffect(() => {
    getLocation();
    getWeather();
  }, []);

  const getLocation = async () => {
    const location = await axios.get(`https://ipapi.co/json`);
    setLocation(location.data);
  };

  const url = `https://api.openweathermap.org/data/2.5/weather?q=&lat=${location.latitude}&lon=${location.longitude}&units=metric&appid=5cde20844857039011f2579b2607a1ab`;

  const getWeather = () => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        console.log(result);
      });
  };

  return (
    <Popup
      content={
        <div>
          <p>Probably, your current location is:</p>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
          <h3>City: {location.city}</h3>
          <p>And lets look at the weather!</p>
          {weather.main ? <p>{weather.main.temp.toFixed()} &#176;C</p> : null}
          {weather.weather ? <p>{weather.weather[0].main}</p> : null}
        </div>
      }
    />
  );
};

export default PopupWeather;
