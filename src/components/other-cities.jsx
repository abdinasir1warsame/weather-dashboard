import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

const CitiesSection = ({ countryCode, selectedCity }) => {
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

  const [cities, setCities] = useState([]);
  const [allCitiesWeather, setAllCitiesWeather] = useState([]);
  const [selectedCityName, setSelectedCityName] = useState(null);
  const [showMajorCities, setShowMajorCities] = useState(false);
  const geoNamesKey = 'abdinasir1993';
  const weatherKey = 'd92eced4f070a72612c2186a9ea527d8';

  useEffect(() => {
    const fetchCities = async () => {
      if (!countryCode) return;
      try {
        const response = await fetch(
          `https://secure.geonames.org/searchJSON?country=${countryCode}&maxRows=10&username=${geoNamesKey}`
        );
        if (response.ok) {
          const data = await response.json();
          setCities(data.geonames || []);
        } else {
          console.log('Unable to retrieve data, error 401');
        }
      } catch (error) {
        console.log('Failed to retrieve data', error);
      }
    };

    fetchCities();
  }, [countryCode]);

  useEffect(() => {
    const fetchCitiesWeather = async () => {
      try {
        const weatherFetches = cities.map((city) =>
          fetch(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${city.lat}&lon=${city.lng}&appid=${weatherKey}&units=metric`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error(
                  `Error fetching data for ${city.name}: ${response.statusText}`
                );
              }
              return response.json();
            })
            .then((weatherData) => ({
              city: city.name,
              weather: weatherData,
            }))
        );

        const allWeatherData = await Promise.all(weatherFetches);

        setAllCitiesWeather(allWeatherData);
      } catch (error) {
        console.error('Failed to retrieve weather data', error);
      }
    };

    if (cities.length > 0) {
      fetchCitiesWeather();
    }
  }, [cities]);

  const handleCityClick = (clickedCity) => {
    setAllCitiesWeather((prevCities) => {
      const clickedCityData = prevCities.find(
        (city) => city.city === clickedCity
      );
      const updatedCities = prevCities.filter(
        (city) => city.city !== clickedCity
      );
      return [clickedCityData, ...updatedCities];
    });
    setSelectedCityName(clickedCity);
    selectedCity(clickedCity);
  };

  return (
    <div>
      <div>
        <div className="hidden lg:block box-shadow    rounded-b-2xl lg:rounded-b-none">
          <div className="flex justify-between items-center px-5 py-6">
            <h3 className="text-xl text-shadow text-white">
              Major Cities Nearby
            </h3>
            <p
              className="text-gray-300 cursor-pointer"
              onClick={() => setShowMajorCities(false)}
            >
              Show More
            </p>
          </div>
          <div className="grid space-y-8 grid-cols-1 px-8 lg:px-12 lg:py-5 mb-8 lg:mb-0">
            <AnimatePresence>
              {allCitiesWeather.slice(0, 4).map((city) => (
                <motion.div
                  key={city.city}
                  onClick={() => handleCityClick(city.city)}
                  className={`rounded-2xl background3 flex justify-around py-2 text-sm lg:text-md option-button ${
                    city.city === selectedCityName ? 'selected' : ''
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  layout
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                  <div className="text-white space-y-2">
                    <p className="text-gray-300 font-bold">{countryCode}</p>
                    <p className="text-md lg:text-lg">{city.city}</p>
                    <p className="text-gray-300 font-bold">
                      {city.weather.current.weather[0].description}
                    </p>
                  </div>
                  <div className="flex flex-col justify-around items-center">
                    <img
                      className="h-12"
                      src={mapIconToSvg(city.weather.current.weather[0].icon)}
                      alt=""
                    />
                    <p className="font-bold text-lg lg:text-2xl">
                      {city.weather.current.temp}&deg;
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        {showMajorCities ? (
          <div className="absolute w-60 relative background lg:hidden  z-10 right-[230px] sml:right-[215px] lg:right-auto rounded-b-2xl lg:rounded-b-none pb-8 px-4">
            <div className="flex justify-between items-center  py-6">
              <h3 className="text-lg text-shadow text-white ml-2">
                Major Cities Nearby
              </h3>
              <p
                className="text-white cursor-pointer"
                onClick={() => setShowMajorCities(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </p>
            </div>
            <div className="grid space-y-8 grid-cols-1 px-2 ">
              <AnimatePresence>
                {allCitiesWeather.slice(0, 4).map((city) => (
                  <motion.div
                    key={city.city}
                    onClick={() => handleCityClick(city.city)}
                    className={`rounded-2xl background3 flex justify-around py-2 text-sm lg:text-md option-button ${
                      city.city === selectedCityName ? 'selected' : ''
                    }`}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    layout
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  >
                    <div className="text-white space-y-2">
                      <p className="text-gray-300 font-bold">{countryCode}</p>
                      <p className="text-md lg:text-lg">{city.city}</p>
                      <p className="text-gray-300 font-bold">
                        {city.weather.current.weather[0].description}
                      </p>
                    </div>
                    <div className="flex flex-col justify-around items-center">
                      <img
                        className="h-12"
                        src={mapIconToSvg(city.weather.current.weather[0].icon)}
                        alt=""
                      />
                      <p className="font-bold text-lg lg:text-2xl">
                        {city.weather.current.temp}&deg;
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        ) : (
          <div className="flex text-xs ">
            <p
              className="  w-[99px] py-2 relative lg:hidden border right-[100px] top-6 sml:top-10 py-1 background2 rounded-2xl text-center text-white font-bold option-button cursor-pointer"
              onClick={() => setShowMajorCities(true)} // Functionality to show major cities
            >
              Cities Nearby
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CitiesSection;
