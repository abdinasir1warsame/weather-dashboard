import React, { useState, useEffect } from 'react';

import IconsToMap from './icons-to-map';

const Forecast = ({ weatherData }) => {
  const [viewMode, setViewMode] = useState('today');

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString('en-US', { weekday: 'long' });
  };
  const formatDateShort = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  };

  const formatTime = (timestamp, offset) => {
    const date = new Date((timestamp + offset) * 1000);
    return date.toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (!weatherData || !weatherData.current) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <div className="text-white text-4xl">Loading weather data...</div>
      </div>
    );
  }

  return (
    <div className="max-h-1/2 mt-2 lg:mt-0 ">
      <div className="pt-3">
        <div className="flex justify-between items-center pl-5 lg:px-5 pt-2 sml:pt-6 lg:py-5 lg:mb-0 mb-2">
          <div className="flex  text-sm gap-2 sml:text-md lg:gap-5  lg:text-xl text-big-stone-50 text-gray-400 ">
            <p
              className={
                viewMode === 'today'
                  ? 'text-white  hover:text-white cursor-pointer'
                  : ' cursor-pointer  hover:text-white'
              }
              onClick={() => setViewMode('today')}
            >
              Today
            </p>
            <p
              className={
                viewMode === 'tomorrow'
                  ? 'text-white hover:text-white cursor-pointer'
                  : ' cursor-pointer  hover:text-white'
              }
              onClick={() => setViewMode('tomorrow')}
            >
              Tomorrow
            </p>
            <p
              className={
                viewMode === 'daily'
                  ? 'text-white  hover:text-white cursor-pointer'
                  : ' cursor-pointer  hover:text-white'
              }
              onClick={() => setViewMode('daily')}
            >
              Next 7 days
            </p>
          </div>
      
        </div>
        <IconsToMap
          weatherData={weatherData}
          formatDate={formatDate}
          formatDateShort={formatDateShort}
          formatTime={formatTime}
          viewMode={viewMode}
        />
      </div>
    </div>
  );
};

export default Forecast;
