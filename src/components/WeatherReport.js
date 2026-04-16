import { useState } from "react";
import axios from "axios";
import "./WeatherReport.css";

const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
const DEFAULT_CITY = "Kolkata";

const weatherDescriptions = {
  Thunderstorm: "Expect unstable skies and possible lightning in the area.",
  Drizzle: "A light drizzle is hanging around, so keep a layer handy.",
  Rain: "Showers are active, so it is a good day for an umbrella.",
  Snow: "Snow conditions are present, so dress warmly and travel carefully.",
  Clear: "Clear skies make it a great time to head outside.",
  Clouds: "Cloud cover is keeping the sky soft and muted today.",
  Mist: "Visibility may be reduced with a light mist in the air.",
  Smoke: "Air quality may be reduced because of smoky conditions.",
  Haze: "A mild haze is present, so the skyline may look softer than usual.",
  Dust: "Dusty conditions are building, especially in open areas.",
  Fog: "Fog can reduce visibility, especially in the morning and evening.",
  Sand: "Sandy air is present, so eye protection can be helpful.",
  Ash: "Volcanic ash conditions require extra caution outdoors.",
  Squall: "Wind gusts may pick up quickly with squally weather.",
  Tornado: "Severe weather alert conditions require immediate caution."
};

function WeatherReport() {
  const [city, setCity] = useState(DEFAULT_CITY);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const fetchWeather = async (searchCity) => {
    const trimmedCity = searchCity.trim();

    if (!trimmedCity) {
      setError("Please enter a city name before searching.");
      setWeather(null);
      return;
    }

    if (!API_KEY) {
      setError(
        "Missing API key. Add REACT_APP_OPENWEATHER_API_KEY to your .env file."
      );
      setWeather(null);
      return;
    }

    setLoading(true);
    setError("");
    setHasSearched(true);

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        trimmedCity
      )}&appid=${API_KEY}&units=metric`;

      const response = await axios.get(url);
      setWeather(response.data);
    } catch (requestError) {
      if (requestError.response?.status === 404) {
        setError("City not found. Please try another location.");
      } else {
        setError("Unable to fetch weather data right now. Please try again.");
      }
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeather(city);
  };

  const condition = weather?.weather?.[0]?.main || "";
  const description =
    weatherDescriptions[condition] ||
    "Weather details are available for this location right now.";

  return (
    <section className="weather-card" aria-labelledby="weather-heading">
      <div className="weather-card__header">
        <p className="section-label">Search Weather</p>
        <h2 id="weather-heading">Find the current weather in your city</h2>
        <p className="section-copy">
          Enter a city name to load live weather data from OpenWeatherMap.
        </p>
      </div>

      <form className="search-form" onSubmit={handleSubmit}>
        <label className="search-form__label" htmlFor="city-search">
          City Name
        </label>
        <div className="search-form__controls">
          <input
            id="city-search"
            type="text"
            className="search-form__input"
            placeholder="Search for Delhi, London, Tokyo..."
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
          <button className="search-form__button" type="submit">
            {loading ? "Searching..." : "Get Weather"}
          </button>
        </div>
      </form>

      {!hasSearched && !weather && !error && (
        <div className="status-panel status-panel--info">
          Search for a city to see live weather insights.
        </div>
      )}

      {error && <div className="status-panel status-panel--error">{error}</div>}

      {weather && (
        <article className="weather-result" aria-live="polite">
          <header className="weather-result__hero">
            <div>
              <p className="weather-result__eyebrow">Current Conditions</p>
              <h3>
                {weather.name}, {weather.sys?.country}
              </h3>
              <p className="weather-result__description">{description}</p>
            </div>
            <div className="temperature-badge">
              <span>{Math.round(weather.main.temp)}°C</span>
              <small>{weather.weather?.[0]?.description}</small>
            </div>
          </header>

          <div className="weather-grid">
            <div className="metric-card">
              <span>Feels Like</span>
              <strong>{Math.round(weather.main.feels_like)}°C</strong>
            </div>
            <div className="metric-card">
              <span>Humidity</span>
              <strong>{weather.main.humidity}%</strong>
            </div>
            <div className="metric-card">
              <span>Wind Speed</span>
              <strong>{weather.wind.speed} m/s</strong>
            </div>
            <div className="metric-card">
              <span>Pressure</span>
              <strong>{weather.main.pressure} hPa</strong>
            </div>
            <div className="metric-card">
              <span>Visibility</span>
              <strong>{(weather.visibility / 1000).toFixed(1)} km</strong>
            </div>
            <div className="metric-card">
              <span>Temperature Range</span>
              <strong>
                {Math.round(weather.main.temp_min)}°C /{" "}
                {Math.round(weather.main.temp_max)}°C
              </strong>
            </div>
          </div>
        </article>
      )}
    </section>
  );
}

export default WeatherReport;
