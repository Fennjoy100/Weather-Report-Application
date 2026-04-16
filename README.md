# Weather Report Application

A responsive React weather app built with Create React App and `axios` that lets users search for live weather information by city name.

## Features

- Search weather by city name
- Fetch live data from OpenWeatherMap
- Responsive layout using Flexbox, Grid, and media queries
- Error handling for invalid cities, missing API keys, and failed requests
- Clean component structure with a dedicated weather component

## Setup

1. Create an OpenWeatherMap API key from [OpenWeatherMap](https://openweathermap.org/api).
2. Copy `.env.example` to `.env`.
3. Set `REACT_APP_OPENWEATHER_API_KEY` in `.env`.
4. Install dependencies:

```bash
npm install
```

5. Start the app:

```bash
npm start
```

## Project Structure

- `src/App.js` handles the main layout
- `src/components/WeatherReport.js` manages weather search, API calls, and UI rendering
- `src/App.css` and `src/components/WeatherReport.css` handle the responsive styling
