import React from "react";
import "./dailyweather.css";

const getDay = (dt_txt) => {
  let day = new Date(dt_txt).getDay();
  switch (day) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      // FIXME should not return an error
      return "Error";
  }
};

function Dailyweather({ currentWeather }) {

  const daysOnlyWeatherList = currentWeather.list.filter((item, index) => {
    var day = new Date(item.dt_txt);
    return (day.getHours() % 24 === 0);
  });

  const dailyWeatherList = daysOnlyWeatherList.slice(1, 5);
  console.log(dailyWeatherList)

  return (
    <div className="daily-weather-list">
      {dailyWeatherList.map(
        ({
          dt,
          dt_txt,
          main: { temp },
          weather: [{ icon, main, description }],
        }) => {
          return (
            <div className="list-item" key={dt}>
              <p>{getDay(dt_txt)}</p>
              <img src={`/images/images/${icon}.svg`} alt="weather-icon" />
              <p>{Math.trunc(temp - 273)}&#176;C</p>
            </div>
          );
        }
      )}
    </div>
  );
}

export default Dailyweather;
