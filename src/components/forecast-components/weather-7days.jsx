const SevenDayForecast = ({
  formatTime,
  weatherData,
  formatDate,
  mapIconToSvg,
}) => {
  return (
    <>
      <div className="grid space-x-3 grid-cols-1 w-full md:grid-cols-[1fr_3fr] pb-3 pt-7 px-4">
        <div className="background3 rounded-2xl text-white">
          <div className="flex justify-around items-center px-4 text-xl font-bold background3 rounded-t-2xl text-center py-3">
            <p>Todays Weather</p>
            <p>
              {formatTime(weatherData.current.dt, weatherData.timezone_offset)}
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
    </>
  );
};
export default SevenDayForecast;
