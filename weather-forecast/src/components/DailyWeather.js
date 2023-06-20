import "./WeeklyWeather.css";

const forecastData = {
  day: "Friday",
  conditions: "sunny",
  maxTemp: 35,
  wind: 16,
  hourlyTemp: [
    17, 17, 17, 17, 18, 19, 20, 22, 24, 27, 29, 32, 34, 35, 34, 33, 32, 30, 28,
    26, 24, 21, 19, 18,
  ],
};

const DailyWeather = () => {
  const { day, conditions, maxTemp, wind, hourlyTemp } = forecastData;

  return (
    <div>
      <div className="day-info">
        <h2>{day}:</h2>
        <h3>{conditions}</h3>
        <h3>
          <span>Max Temp: </span>
          {maxTemp}°C
        </h3>
        <h3>
          <span>Wind: </span>
          {wind}km/h
        </h3>
      </div>

      <div className="weather-grid">
        {hourlyTemp.map((temp, index) => (
          <div
            key={index}
            className={`weather-hour ${getTemperatureColor(temp)}`}
          >
            <p>{index}:00</p>
            <p>{temp}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const getTemperatureColor = (temp) => {
  if (temp >= 30) {
    return "weather-hour-hot";
  } else if (temp >= 25) {
    return "weather-hour-warm";
  } else if (temp >= 20) {
    return "weather-hour-moderate";
  } else if (temp >= 15) {
    return "weather-hour-cool";
  } else {
    return "weather-hour-cold";
  }
};

export default DailyWeather;
