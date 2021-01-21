import React from "react";

export default function Weather() {
  let weatherData = {
    city: "Seattle",
    date: "Monday December 7, 2020",
    time: "2:35 PM",
    weatherCondition: "Rain",
    currentTemp: 47,
    highTemp: 50,
    lowTemp: 41,
    humidity: 72,
    wind: 10
  };
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
          {weatherData.date}
          <span> {weatherData.time}</span>
        </h3>
        <h5 className="weather-condition">{weatherData.weatherCondition}</h5>
        <div className="row">
          <div className="col-6">
            <div className="clearfix current-conditions">
              <img
                src="http://openweathermap.org/img/wn/10d@2x.png"
                className="float-left weather-image" alt="weather-condition" rel="noreferrer"
              />
              <div class="float-left">
                <strong>{weatherData.currentTemp}</strong>
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
                High: {weatherData.highTemp}° Low: {weatherData.lowTemp}°
              </li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li className="units">
                Windspeed:
                <span className="active">
                  {weatherData.wind} MPH
                </span>
                |<span>KPH</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
