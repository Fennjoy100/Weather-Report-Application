# Weather Report App

A dynamic and responsive weather application built using React and Create React App. This project focuses on API integration with OpenWeatherMap, React state management with `useState`, city-based weather search, responsive layouts, and interactive error feedback.

## Live Demo

Repository: WEATHER-REPORT-APP

## Project Overview

Weather Report App is a modern front-end React project that showcases:

- A simple weather search interface for mobile, tablet, and desktop
- City-based weather lookup using OpenWeatherMap API
- Live weather results with temperature, humidity, wind speed, and description
- Responsive layout that adapts across screen sizes
- Error handling for invalid city names and failed requests
- Clean component structure with reusable UI sections

This project demonstrates strong fundamentals in React component structure, state updates, API integration, conditional rendering, responsive styling, and polished UI presentation.

## Technologies Used

- React: Component-based UI development
- Create React App: Fast development server and project bundling
- JavaScript (ES6+): State handling and asynchronous API logic
- CSS3: Custom styling, responsive layout, transitions, and animations
- Axios: HTTP requests to the weather API

## Features

### Weather Search Functionality

- City Search Input: Enter a city name to fetch current weather
- Search Button: Triggers the API request and updates the weather display
- Loading Feedback: Shows app status while waiting for the response

### Weather Display

- Current Conditions: Shows temperature, humidity, wind speed, and weather description
- Weather Icon: Displays a visual icon for current weather
- Clean Card Layout: Organized weather results with readable styling

### Error Handling

- Invalid City Feedback: Displays a message when the city is not found
- Request Error Handling: Gracefully manages failed API calls
- Input Validation: Prevents blank search submissions

### Responsive Design

- Mobile View: Stacks content cleanly on smaller screens
- Tablet Support: Balances spacing and layout for medium devices
- Desktop Layout: Displays full weather details in a wider responsive panel

## Development Process

- State Management: Used React `useState` to manage search input, weather data, loading state, and errors
- API Integration: Connected to OpenWeatherMap via Axios for live weather updates
- Conditional Rendering: Weather results appear only after successful fetch, while errors and loading states display only when appropriate
- Responsive Styling: Used CSS media queries and layout techniques for multiple screen sizes
- UI Feedback: Added clear status messages for loading, success, and error states

## Project Structure

```
weather-report-app/
|-- public/                            # Static images and media assets
|-- src/
|   |-- App.js                         # Main application layout, search form, and weather display logic
|   |-- index.js                       # React root entry point
|   |-- App.css                        # Global styles and responsive layout rules
|   `-- components/
|       `-- WeatherReport.js           # Weather fetching logic and UI rendering
|-- package.json                       # Project dependencies and scripts
|-- README.md                          # Project documentation
```

## What I Learned

### React State Management

Improved understanding of how shared React state can control login state, student data, favourite actions, editable marks, dark mode, and modal-based report updates.

### Conditional Rendering

Learned how to show UI states such as login entry, empty favourites, detailed student reports, dynamic button labels, and interactive feedback only when needed.

### CSS Animation

Gained practical experience creating flying star effects, remove animations, image flips, and smooth UI transitions using CSS keyframes and transitions.

### Responsive Styling

Built a more polished and adaptable layout that works consistently across mobile, tablet, and desktop screens.

### Interactive UI Design

Strengthened front-end design skills by combining card-based layouts, theme switching, live calculations, popup editing, login entry, and animated visual feedback into one interactive system.

## Notes

- This app requires an OpenWeatherMap API key to fetch live weather data
- Search results are retrieved by city name and updated on demand
- Responsive styling keeps the UI accessible on mobile, tablet, and desktop
- Error handling improves the user experience for invalid city input or request failures
