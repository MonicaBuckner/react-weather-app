import React, { useState } from "react";
import axios from "axios";
import DateAndTime from "./DateAndTime";

export default function Weather(props) {
 
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
 
  if (ready) {
    return (
    <div className="Weather">
      <div className="perimeter">
        <div className="top-of-page">
          <h1>{weatherData.city}</h1>
          <form>
            <input
              type="search"
              placeholder="Enter a city"
              autoComplete="off"
              autoFocus="on"
            />
            <input type="submit" />
          </form>
        </div>
        <h3>
          <DateAndTime date={weatherData.date} />
        </h3>
        <h5 className="weather-condition">{weatherData.description}</h5>
        <div className="row">
          <div className="col-6">
            <div className="clearfix current-conditions">
              <img
                src="http://openweathermap.org/img/wn/10d@2x.png"
                className="float-left weather-image" alt="weather-condition" rel="noreferrer"
              />
              <div class="float-left">
                <strong>{Math.round(weatherData.currentTemp)}</strong>
                <span class="units">
                  <span class="active">
                    {" "}
                    °F
                  </span>{" "}
                  | <span> °C</span>
                </span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>
                High: {Math.round(weatherData.highTemp)}° Low: {Math.round(weatherData.lowTemp)}°
              </li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li className="units">
                Windspeed:
                <span className="active">
                  {Math.round(weatherData.wind)} MPH
                </span>
                |<span>KPH</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  } else {

  let apiKey="2c596f2ffa75a1e706f3d5b23375abfb";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(showResponse);

  return "Loading...";
  }
  
}
