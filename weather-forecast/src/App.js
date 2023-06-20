import "./App.css";
import DailyWeather from "./components/DailyWeather";
import WeeklyWeather from "./components/WeeklyWeather";

function App() {
  return (
    <div className="app">
      <div className="container">
        <h1>Weather Forecast</h1>
        <WeeklyWeather />
        <DailyWeather />
      </div>
    </div>
  );
}

export default App;
