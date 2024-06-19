import React from 'react';
const WeatherTomorrow = ({
  formatTime,
  weatherData,
  formatDate,

  mapIconToSvg,
}) => {
  return (
    <>
      <div className="grid space-x-3 grid-cols-1 w-full md:grid-cols-[1fr_3fr] pb-3 pt-7 px-4">
        <div className="background3 rounded-2xl text-white">
          <div className="flex justify-center items-center px-4 text-xl font-bold background3 rounded-t-2xl text-center py-3">
            <p>Tomorrows Weather</p>
          </div>
          <div className="flex text-center py-3">
            <div className="w-1/2 mt-5">
              <div>
                <h3 className="text-6xl font-bold h-20">
                  {weatherData.daily[1].temp.day.toFixed(0)}&deg;
                </h3>
                <div className="text-xs mt-2 space-y-1">
                  <p>Humidity: {weatherData.daily[1].humidity}%</p>
                  <p>
                    Wind N E: {weatherData.daily[1].wind_speed.toFixed(0)}km/h
                  </p>
                </div>
              </div>
            </div>
            <div className="w-1/2 mt-5">
              <div className="flex justify-center">
                <img
                  className="object-cover h-20"
                  src={mapIconToSvg(weatherData.daily[1].weather[0].icon)}
                  alt="Weather Icon"
                />
              </div>
              <div className="text-xs text-center mt-2 space-y-1">
                <p>
                  Sunrise:{' '}
                  {formatTime(
                    weatherData.daily[1].sunrise,
                    weatherData.timezone_offset
                  )}
                </p>
                <p>
                  Sunset:{' '}
                  {formatTime(
                    weatherData.daily[1].sunset,
                    weatherData.timezone_offset
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-x-5 grid grid-cols-6 px-5">
          {weatherData.hourly.slice(20, 26).map((hour, index) => (
            <div
              key={index}
              className="flex flex-col justify-around items-center rounded-2xl background2"
            >
              <div className="text-lg text-big-stone-50 border-b border-big-stone-50">
                {formatTime(hour.dt, weatherData.timezone_offset)}
              </div>
              <div>
                <img
                  className="h-20"
                  src={mapIconToSvg(hour.weather[0].icon)}
                  alt="Weather Icon"
                />
              </div>
              <div className="text-4xl font-bold text-big-stone-50 ml-1">
                {hour.temp.toFixed(0)}&deg;
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default WeatherTomorrow;
