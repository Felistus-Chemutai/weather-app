const API_KEY = "ae2a0b0783c26f2da1386f42ae36fb88";

// lat={lat}&lon={lon}
// lat=${lat}&lon=${lon}
async function getCurrentWeatherData(cityName) {
  // const [lat, lon]= await getCoordinates(cityName)
  const url = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export { getCurrentWeatherData };