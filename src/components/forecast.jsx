import React, { useState, useEffect } from 'react';

import IconsToMap from './icons-to-map';

const Forecast = ({ weatherData, setParentViewMode }) => {
  const [viewMode, setViewMode] = useState('daily');
  // Map OpenWeather icon codes to imported SVG images
  useEffect(() => {
    setParentViewMode(viewMode);
  }, [viewMode, setParentViewMode]);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString('en-US', { weekday: 'long' });
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
  console.log(viewMode);
  return (
    <div className="max-h-1/2">
      <div className="pt-3">
        <div className="flex justify-between items-center px-5 py-5">
          <div className="flex gap-5 text-xl text-big-stone-50 text-gray-400 ">
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
          <div className="flex gap-5 text-xl">
            <p className="px-4 border py-1 background2 rounded-2xl text-center text-white font-bold">
              Forecast
            </p>
            <p className="px-4 py-1 rounded-2xl text-center border text-gray-300 font-bold option-button cursor-pointer">
              Air Quality
            </p>
          </div>
        </div>
        <IconsToMap
          weatherData={weatherData}
          formatDate={formatDate}
          formatTime={formatTime}
          viewMode={viewMode}
        />
      </div>
    </div>
  );
};

export default Forecast;
