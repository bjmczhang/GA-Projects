import GetEmoji from "./GetEmoji";

const forecastData = [
  {
    day: "Monday",
    conditions: "sunny",
    maxTemp: 38,
    wind: 15,
  },
  {
    day: "Tuesday",
    conditions: "stormy",
    maxTemp: 26,
    wind: 36,
  },
  {
    day: "Wednesday",
    conditions: "rainy",
    maxTemp: 25,
    wind: 25,
  },
  {
    day: "Thursday",
    conditions: "cloudy",
    maxTemp: 28,
    wind: 20,
  },
  {
    day: "Friday",
    conditions: "sunny",
    maxTemp: 35,
    wind: 16,
  },
];

// const getEmoji = (conditions) => {
//   switch (conditions) {
//     case "sunny":
//       return "☀️";
//     case "rainy":
//       return "🌧️";
//     case "cloudy":
//       return "☁️";
//     case "stormy":
//       return "🌩️";
//     default:
//       return "⛅";
//   }
// };

const WeeklyWeather = () => {
  return (
    <div className="weekly-weather">
      {forecastData.map((dailyData, index) => {
        const { day, conditions, maxTemp, wind } = dailyData;
        const tempLabel = maxTemp >= 35 ? "Heatwave warning!" : "";
        const windLabel = wind >= 30 ? "Strong wind warning!" : "";
        // const emoji = getEmoji(conditions);

        return (
          <div key={index} className="weather-card">
            <h2>{day}</h2>
            {/* <span className="emoji">{emoji}</span> */}

            <span className="emoji">
              <GetEmoji conditions={conditions} />
            </span>

            <div className="details">
              <div className="details-left">
                <p>Max Temp</p>
                <p className="detail-content">{maxTemp}°C</p>
              </div>
              <div className="details-right">
                <p>Wind Speed</p>
                <p className="detail-content">{wind}km/h</p>
              </div>
            </div>
            <div className="label">
              <p className="label-temp">{tempLabel}</p>
              <p className="label-wind">{windLabel}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WeeklyWeather;
