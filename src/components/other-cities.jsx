import { useEffect, useState } from 'react';
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

  const geoNamesKey = 'abdinasir1993';
  const weatherKey = 'b12576978ee89d5afb176d845464f39b';

  useEffect(() => {
    const fetchCities = async () => {
      if (!countryCode) return;
      try {
        const response = await fetch(
          `http://api.geonames.org/searchJSON?country=${countryCode}&maxRows=10&username=${geoNamesKey}`
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

  return (
    <div className="box-shadow">
      <div className="flex justify-between items-center px-5 py-6">
        <h3 className="text-xl text-shadow text-white">Major Cities Nearby </h3>
        <p className="text-gray-300">show All</p>
      </div>

      <div className="grid space-y-8 grid-cols-1 px-12 py-5">
        {allCitiesWeather.slice(0, 4).map((city) => (
          <div
            key={city.city}
            onClick={() => {
              selectedCity(city.city);
            }}
            className="rounded-2xl background3 flex justify-around py-2 text-md option-button"
          >
            <div className="text-white space-y-2  ">
              <p className="text-gray-300 font-bold ">{countryCode}</p>
              <p className="text-lg">{city.city}</p>
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
              <p className="font-bold text-2xl">
                {city.weather.current.temp}&deg;
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CitiesSection;
