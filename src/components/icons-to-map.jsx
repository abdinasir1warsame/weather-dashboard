// src/components/IconsToMap.js

import React from 'react';

import img01d from '../assets/img/01d.svg';
import img01n from '../assets/img/01n.svg';
import img02d from '../assets/img/02d.svg';
import img02n from '../assets/img/02n.svg';
import img03d from '../assets/img/03d.svg';
import img03n from '../assets/img/03n.svg';
import img04d from '../assets/img/04d.svg';
import img04n from '../assets/img/04n.svg';
import img09d from '../assets/img/09d.svg';
import img09n from '../assets/img/09n.svg';
import img10d from '../assets/img/10d.svg';
import img10n from '../assets/img/10n.svg';
import img11d from '../assets/img/11d.svg';
import img11n from '../assets/img/11n.svg';
import img13d from '../assets/img/13d.svg';
import img13n from '../assets/img/13n.svg';
import img50d from '../assets/img/50d.svg';
import img50n from '../assets/img/50n.svg';
import SevenDayForecast from './forecast-components/weather-7days';
import WeatherToday from './forecast-components/weather-today';
import WeatherTomorrow from './forecast-components/weather-tomorrow';

const IconsToMap = ({ weatherData, formatDate, formatTime, viewMode }) => {
  const mapIconToSvg = (openWeatherIcon) => {
    const iconMapping = {
      '01d': img01d,
      '01n': img01n,
      '02d': img02d,
      '02n': img02n,
      '03d': img03d,
      '03n': img03n,
      '04d': img04d,
      '04n': img04n,
      '09d': img09d,
      '09n': img09n,
      '10d': img10d,
      '10n': img10n,
      '11d': img11d,
      '11n': img11n,
      '13d': img13d,
      '13n': img13n,
      '50d': img50d,
      '50n': img50n,
    };

    return iconMapping[openWeatherIcon] || img01d; // default to img01d if icon not found
  };

  // Choose the component to render based on the viewMode
  return (
    <div>
      {viewMode === 'daily' && (
        <SevenDayForecast
          formatDate={formatDate}
          weatherData={weatherData}
          formatTime={formatTime}
          mapIconToSvg={mapIconToSvg}
        />
      )}
      {viewMode === 'today' && (
        <WeatherToday
          formatDate={formatDate}
          weatherData={weatherData}
          formatTime={formatTime}
          mapIconToSvg={mapIconToSvg}
        />
      )}
      {viewMode === 'tomorrow' && (
        <WeatherTomorrow
          formatDate={formatDate}
          weatherData={weatherData}
          formatTime={formatTime}
          mapIconToSvg={mapIconToSvg}
        />
      )}
    </div>
  );
};

export default IconsToMap;
