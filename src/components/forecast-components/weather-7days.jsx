import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const SevenDayForecast = ({
  formatTime,
  weatherData,
  formatDate,
  mapIconToSvg,
  viewMode,
  formatDateShort,
}) => {
  // Variants for the fade-in from the bottom animation
  const fadeInFromBottomVariant = {
    hidden: { opacity: 0, y: 50 }, // start invisible and below the final position
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        duration: 0.8,
        delay: index * 0.2, // delay based on the index to stagger the appearance
      },
    }),
  };

  // Using a state to store the key for triggering reanimation
  const [animationKey, setAnimationKey] = useState(0);

  // Update the animation key whenever weatherData changes
  useEffect(() => {
    if (weatherData && weatherData.current) {
      const newKey = weatherData.current.dt; // Use current weather timestamp or any unique identifier
      setAnimationKey(newKey);
    }
  }, [weatherData?.current?.dt]); // Only update when the timestamp or specific identifier changes

  return (
    <>
      <div className="grid lg:space-x-3 grid-cols-1 lg:w-full lg:grid-cols-[1fr_3fr] pb-3 pt-7 px-4 w-full">
        <motion.div
          key={animationKey} // Ensure reanimation on data change
          className="background3 rounded-2xl text-white lg:h-full lg:w-full h-full w-2/3"
          initial="hidden"
          animate="visible"
          variants={fadeInFromBottomVariant}
        >
          <div className="flex justify-center items-center px-4 text-xl font-bold background3 rounded-t-2xl text-center py-3">
            <p className='xl:text-2xl'>{formatDate(weatherData.daily[1].dt)}</p>
          </div>
          <div className="flex text-center py-3">
            <div className="w-1/2 mt-2 lg:mt-5">
              <div>
                <h3 className="text-3xl h-10 lg:text-6xl font-bold lg:h-20">
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
            <div className="w-1/2 lg:mt-5">
              <div className="flex justify-center">
                <img
                  className="object-cover h-12 lg:h-20"
                  src={mapIconToSvg(weatherData.daily[1].weather[0].icon)}
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
        </motion.div>

        <div className="space-x-3 lg:space-x-5 grid grid-cols-6 lg:px-5 w-full mt-10 lg:mt-0">
          {weatherData.daily.slice(2, 8).map((day, index) => (
            <motion.div
              key={`${animationKey}-${index}`} // Ensure reanimation on data change
              className="flex flex-col space-y-2 lg:space-y-0 justify-around items-center rounded-2xl background2 p-2 lg:p-0"
              initial="hidden"
              animate="visible"
              custom={index} // Pass index as custom prop to the variant
              variants={fadeInFromBottomVariant}
            >
              <div className="text-xs lg:text-lg xl:text-2xl text-big-stone-50 border-b border-big-stone-50">
                {formatDateShort(day.dt)}
              </div>
              <div>
                <img
                  className="h-8 lg:h-20"
                  src={mapIconToSvg(day.weather[0].icon)}
                  alt="Weather Icon"
                />
              </div>
              <div className="text-sm lg:text-4xl font-bold text-big-stone-50 ml-1">
                {day.temp.day.toFixed(0)}&deg;
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SevenDayForecast;
