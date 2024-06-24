import WeatherChart from './forecast-graph';
import CitiesSection from './other-cities';
import Navbar from './navbar';
import { useEffect, useState } from 'react';
import Forecast from './forecast';

const Main = () => {
  const [searchParam, setSearchParam] = useState('');
  const [viewMode, setViewMode] = useState('daily');
  const [weatherData, setWeatherData] = useState('');
  const [cityData, setCityData] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const [lng, setLng] = useState('');
  const [lat, setLat] = useState('');

  const weatherKey = 'd92eced4f070a72612c2186a9ea527d8';

  const fetchCityData = async (query) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${query}&format=json&addressdetails=1`
      );
      if (response.ok) {
        const data = await response.json();
        setCityData(data);
        if (data.length > 0) {
          const { lat, lon, address } = data[0];
          setLat(lat);
          setLng(lon);
          setCountryCode(address.country_code.toUpperCase());
          fetchWeatherData(lat, lon); // Fetch weather data based on new lat and lng
        }
      } else {
        console.error('Failed to retrieve city data');
      }
    } catch (error) {
      console.error('Error fetching city data:', error);
    }
  };

  const fetchWeatherData = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${weatherKey}&units=metric`
      );
      if (response.ok) {
        const data = await response.json();
        setWeatherData(data);
      } else {
        console.error('Failed to retrieve weather data');
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    if (searchParam) {
      fetchCityData(searchParam);
    } else {
      fetchCityData('London');
    }
  }, [searchParam]);

  function handleSearch(onSearch) {
    setSearchParam(onSearch);
  }

  useEffect(() => {
    if (selectedCity) {
      setSearchParam(selectedCity); // Update searchParam with selected city
      fetchCityData(selectedCity); // Fetch city data for the selected city
    }
  }, [selectedCity]); // Dependency on selectedCity

  // Function to handle city selection from CitiesSection
  const handleSelectedCity = (city) => {
    setSelectedCity(city); // Set the selected city which will trigger useEffect
  };

  return (
    <div className="w-full h-[100vh] ">
      <Navbar onSearch={handleSearch} cityData={cityData} />

      <div className=" relative h-full sml:h-[70vh] lg:h-screen grid  grid-cols-[15fr_5fr] ">
        <div className="px-3 lg:px-3 ">
          <Forecast weatherData={weatherData} />
        </div>

        <CitiesSection
          countryCode={countryCode}
          selectedCity={handleSelectedCity}
        />
      </div>
    </div>
  );
};

export default Main;
