import React, { useState } from "react";

export default function UnitConversion(props) {
    const [unit, setUnit] = useState("fahrenheit");
    function convertToCelcius(event) {
        event.preventDefault();
        setUnit("celcius");
    }
    function convertToFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }
    if (unit === "fahrenheit") {
    return (
       <div className="UnitConversion">
        <strong>{Math.round(props.fahrenheit)}</strong>
                <span class="units">
                  <span class="active">
                    {" "}
                    °F
                  </span>{" "}
                  | <a href="/" onClick={convertToCelcius}> °C</a>
                </span>
                </div>
    )
    } else {
        let celcius = (props.fahrenheit - 32) * 5 / 9;
        return (
        <div className="UnitConversion">
        <strong>{Math.round(celcius)}</strong>
                <span class="units">
                  <span class="active">
                    {" "}
                    <a href="/" onClick={convertToFahrenheit}>°F</a>
                  </span>{" "}
                  |  °C
                </span>
                </div>
    )
    }
}