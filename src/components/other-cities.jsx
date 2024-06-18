import { useEffect, useState } from 'react';
import sunImg from '../assets/img/01d.svg'; // Assuming you have an image for displaying weather

const CitiesSection = ({ countryCode }) => {
  const [cities, setCities] = useState([]);
  const [allCitiesWeather, setAllCitiesWeather] = useState([]);

  const geoNamesKey = 'abdinasir1993';
  const weatherKey = 'd92eced4f070a72612c2186a9ea527d8';

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
  console.log(allCitiesWeather);
  return (
    <div className="box-shadow">
      <div className="flex justify-between items-center px-5 py-6">
        <h3 className="text-xl text-shadow text-white">{countryCode} </h3>
        <p className="text-gray-300">show All</p>
      </div>

      <div className="grid space-y-8 grid-cols-1 px-12 py-5">
        <div className="rounded-2xl background3 flex justify-around py-2 text-md">
          <div className="text-white space-y-2  ">
            <p className="text-gray-300 font-bold ">US</p>
            <p className="text-lg">California</p>
            <p className="text-gray-300 font-bold">Mostly Sunny</p>
          </div>
          <div className="flex flex-col justify-around items-center">
            <img className="h-12" src={sunImg} alt="" />
            <p className="font-bold text-2xl">29&deg;</p>
          </div>
        </div>
        <div className="rounded-2xl background3 flex justify-around py-2 text-md">
          <div className="text-white space-y-2  ">
            <p className="text-gray-300 font-bold ">US</p>
            <p className="text-lg">California</p>
            <p className="text-gray-300 font-bold">Mostly Sunny</p>
          </div>
          <div className="flex flex-col justify-around items-center">
            <img className="h-12" src={sunImg} alt="" />
            <p className="font-bold text-2xl">29&deg;</p>
          </div>
        </div>
        <div className="rounded-2xl background3 flex justify-around py-2 text-md">
          <div className="text-white space-y-2  ">
            <p className="text-gray-300 font-bold ">US</p>
            <p className="text-lg">California</p>
            <p className="text-gray-300 font-bold">Mostly Sunny</p>
          </div>
          <div className="flex flex-col justify-around items-center">
            <img className="h-12" src={sunImg} alt="" />
            <p className="font-bold text-2xl">29&deg;</p>
          </div>
        </div>
        <div className="rounded-2xl background3 flex justify-around py-2 text-md">
          <div className="text-white space-y-2  ">
            <p className="text-gray-300 font-bold ">US</p>
            <p className="text-lg">California</p>
            <p className="text-gray-300 font-bold">Mostly Sunny</p>
          </div>
          <div className="flex flex-col justify-around items-center">
            <img className="h-12" src={sunImg} alt="" />
            <p className="font-bold text-2xl">29&deg;</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitiesSection;
