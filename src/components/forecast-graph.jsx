import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const WeatherChart = ({ weatherData, viewMode }) => {
  const [labels, setLabels] = useState([]);
  const [temp, setTemp] = useState([]);
  const [wind, setWind] = useState([]);
  const [text, setText] = useState('');

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

  useEffect(() => {
    if (viewMode === 'daily' && weatherData?.daily) {
      // Collect the data you need from the daily forecast
      const dailyLabels = weatherData.daily
        .slice(1, 7)
        .map((day) => formatDate(day.dt));
      const dailyTemp = weatherData.daily
        .slice(1, 7)
        .map((day) => day.temp.day);
      const dailyWind = weatherData.daily
        .slice(1, 7)
        .map((day) => day.wind_speed);

      // Now set the state with the collected data
      setLabels(dailyLabels);
      setTemp(dailyTemp);
      setWind(dailyWind);
      setText('Day Of The Week');
    }

    if (viewMode === 'today' && weatherData?.hourly) {
      // Collect the data you need from the hourly forecast for today
      const hourlyLabels = weatherData.hourly
        .slice(0, 24)
        .filter((_, index) => index % 4 === 0)
        .map((hour) => formatTime(hour.dt, weatherData.timezone_offset));
      const hourlyTemp = weatherData.hourly
        .slice(0, 24)
        .filter((_, index) => index % 4 === 0)
        .map((hour) => hour.temp);
      const hourlyWind = weatherData.hourly
        .slice(0, 24)
        .filter((_, index) => index % 4 === 0)
        .map((hour) => hour.wind_speed);

      // Now set the state with the collected data
      setLabels(hourlyLabels);
      setTemp(hourlyTemp);
      setWind(hourlyWind);
      setText('Hours Of The Day');
    }

    if (viewMode === 'tomorrow' && weatherData?.hourly) {
      // Collect the data you need from the hourly forecast for tomorrow
      const hourlyLabels = weatherData.hourly
        .slice(24, 48)
        .filter((_, index) => index % 4 === 0)
        .map((hour) => formatTime(hour.dt, weatherData.timezone_offset));
      const hourlyTemp = weatherData.hourly
        .slice(24, 48)
        .filter((_, index) => index % 4 === 0)
        .map((hour) => hour.temp);
      const hourlyWind = weatherData.hourly
        .slice(24, 48)
        .filter((_, index) => index % 4 === 0)
        .map((hour) => hour.wind_speed);

      // Now set the state with the collected data
      setLabels(hourlyLabels);
      setTemp(hourlyTemp);
      setWind(hourlyWind);
      setText('Hours Of The Day');
    }
  }, [viewMode, weatherData]);

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Temperature (°C)',
        data: temp, // Use the state variable here
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Wind (mph)',
        data: wind, // Use the state variable here
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'white',
        },
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: text,
          color: 'white',
          font: {
            size: 18,
          },
        },
        ticks: {
          color: 'white',
          font: {
            size: 14,
          },
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)',
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Values',
          color: 'white',
          font: {
            size: 18,
          },
        },
        ticks: {
          color: 'white',
          font: {
            size: 18,
          },
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)',
        },
      },
    },
    layout: {
      padding: 20,
    },
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  };
  console.log(weatherData);
  if (!weatherData || !weatherData.daily) {
    return <div>No weather data available</div>;
  }

  return (
    <div
      style={{
        width: '74vw',
        height: '50vh',
        padding: '3px',
      }}
    >
      <Line data={data} options={options} />
    </div>
  );
};

export default WeatherChart;
