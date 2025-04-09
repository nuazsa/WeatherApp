import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL || 'https://api.openweathermap.org/data/2.5/weather';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('Jakarta'); // Default city

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        const response = await axios.get(BASE_URL, {
          params: {
            q: city,
            appid: API_KEY,
            units: 'metric'
          }
        });
        setWeatherData(response.data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch weather data: ' + err.message);
        setWeatherData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <div className="weather-container">
      <h2>Weather Information</h2>
      
      <div className="search-box">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
      </div>

      {loading && <div>Loading...</div>}
      {error && <div className="error">{error}</div>}
      
      {weatherData && (
        <div className="weather-info">
          <h3>{weatherData.name}, {weatherData.sys.country}</h3>
          <div className="temperature">
            <h1>{Math.round(weatherData.main.temp)}°C</h1>
            <p>Feels like: {Math.round(weatherData.main.feels_like)}°C</p>
          </div>
          <div className="weather-details">
            <p>Weather: {weatherData.weather[0].main}</p>
            <p>Description: {weatherData.weather[0].description}</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
            <p>Wind Speed: {weatherData.wind.speed} m/s</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather; 