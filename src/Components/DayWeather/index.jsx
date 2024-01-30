import React from "react";
import "./day-weather.css";

function Dayweather({ currentCity, currentWeather }) {
  const today = currentWeather.list[0];
  const {
    main: { temp },
    weather: [{ icon, main, description }],
  } = today;

  return (
    <div className="day-weather">
      <img src={`/images/images/${icon}.svg`} alt="" />
      <div className="info">
        <p>Today</p>
        <h2 className="city">{currentCity}</h2>
        <p>Temperature {Math.trunc(temp - 273)}&#176;C</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Dayweather;
