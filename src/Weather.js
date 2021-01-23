import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
 const [city, setCity] = useState(props.defaultCity);
 const [weatherData, setWeatherData] = useState({});
 const [ready, setReady] = useState(false);
  function showResponse(response) {
    setWeatherData({
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].main,
      currentTemp: response.data.main.temp,
      highTemp: response.data.main.temp_max,
      lowTemp: response.data.main.temp_min,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed
    });
    setReady(true);
  }

  function search() {
    let apiKey="2c596f2ffa75a1e706f3d5b23375abfb";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(showResponse);

  }
 function performSubmit(event) {
  event.preventDefault();
  search();
 }

 function updateCity(event) {
   setCity(event.target.value);
 }

  if (ready) {
    return (
    <div className="Weather">
      <div className="perimeter">
        <div className="top-of-page">
          <h1>{weatherData.city}</h1>
          <form onSubmit={performSubmit}>
            <input
              type="search"
              placeholder="Enter a city"
              autoComplete="off"
              autoFocus="on"
              onChange={updateCity}
            />
            <input type="submit" />
          </form>
        </div>
        <WeatherInfo info={weatherData} />
        
      </div>
    </div>
  );

  } else {

  search();
  return "Loading...";
  }
  
}
