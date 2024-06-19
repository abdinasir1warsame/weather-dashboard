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

const Forecast = ({ weatherData }) => {
  // Map OpenWeather icon codes to imported SVG images
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

  console.log(weatherData);

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
    return <div className="text-white">Loading weather data...</div>;
  }

  return (
    <div className="max-h-1/2">
      <div className="pt-3">
        <div className="flex justify-between items-center px-5 py-5">
          <div className="flex gap-3 text-xl text-big-stone-50 text-gray-400 ">
            <p className="option-button cursor-pointer rounded-2xl px-1  py-1 hover:text-white">
              Today
            </p>
            <p className="option-button cursor-pointer rounded-2xl px-1  py-1 hover:text-white">
              Tomorrow
            </p>
            <p className="text-white px-1 py-1 hover:text-white cursor-pointer">
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
        <div className="grid space-x-3 grid-cols-1 w-full md:grid-cols-[1fr_3fr] py-12 px-4">
          <div className="background3 rounded-2xl text-white">
            <div className="flex justify-around items-center px-5 text-xl font-bold background3 rounded-t-2xl text-center py-3">
              <p>{formatDate(weatherData.current.dt)}</p>
              <p>
                {formatTime(
                  weatherData.current.dt,
                  weatherData.timezone_offset
                )}
              </p>
            </div>
            <div className="flex text-center py-3">
              <div className="w-1/2 mt-5">
                <div>
                  <h3 className="text-6xl font-bold h-20">
                    {weatherData.current.temp.toFixed(0)}&deg;
                  </h3>
                  <div className="text-xs mt-2 space-y-1">
                    <p>Humidity: {weatherData.current.humidity}%</p>
                    <p>
                      Wind N E: {weatherData.current.wind_speed.toFixed(0)}km/h
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-1/2 mt-5">
                <div className="flex justify-center">
                  <img
                    className="object-cover h-20"
                    src={mapIconToSvg(weatherData.current.weather[0].icon)}
                    alt="Weather Icon"
                  />
                </div>
                <div className="text-xs text-center mt-2 space-y-1">
                  <p>
                    Sunrise:{' '}
                    {formatTime(
                      weatherData.current.sunrise,
                      weatherData.timezone_offset
                    )}
                  </p>
                  <p>
                    Sunset:{' '}
                    {formatTime(
                      weatherData.current.sunset,
                      weatherData.timezone_offset
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-x-5 grid grid-cols-6 px-5">
            {weatherData.daily.slice(1, 7).map((day, index) => (
              <div
                key={index}
                className="flex flex-col justify-around items-center rounded-2xl background2"
              >
                <div className="text-lg text-big-stone-50 border-b border-big-stone-50">
                  {formatDate(day.dt)}
                </div>
                <div>
                  <img
                    className="h-20"
                    src={mapIconToSvg(day.weather[0].icon)}
                    alt="Weather Icon"
                  />
                </div>
                <div className="text-4xl font-bold text-big-stone-50 ml-1">
                  {day.temp.day.toFixed(0)}&deg;
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
