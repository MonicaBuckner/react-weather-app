import React from "react";
import DateAndTime from "./DateAndTime";
import UnitConversion from "./UnitConversion";

export default function WeatherInfo(props) {
    return(
    <div>
        <h3>
          <DateAndTime date={props.info.date} />
        </h3>
        <h5 className="weather-condition">{props.info.description}</h5>
        <div className="row">
          <div className="col-6">
            <div className="clearfix current-conditions">
              <img
                src={props.info.weatherIcon}
                className="float-left weather-image" alt="weather-condition" rel="noreferrer"
              />
              <div class="float-left">
                <UnitConversion fahrenheit={props.info.currentTemp} />
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>
                High: {Math.round(props.info.highTemp)}° Low: {Math.round(props.info.lowTemp)}°
              </li>
              <li>Humidity: {props.info.humidity}%</li>
              <li className="units">
                Windspeed:
                <span>
                  {Math.round(props.info.wind)} MPH
                </span>
              </li>
            </ul>
          </div>
        </div>
    </div>
    );
}