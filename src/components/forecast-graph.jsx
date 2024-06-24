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
  const [chartOptions, setChartOptions] = useState({});

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  };

  const formatTime = (timestamp, offset) => {
    const date = new Date((timestamp + offset) * 1000);
    return date.toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  useEffect(() => {
    console.log('WeatherChart viewMode:', viewMode); // Debugging log for viewMode
    console.log('WeatherChart weatherData:', weatherData); // Debugging log for weatherData

    if (viewMode === 'daily' && weatherData?.daily) {
      const dailyLabels = weatherData.daily
        .slice(1, 7)
        .map((day) => formatDate(day.dt));
      const dailyTemp = weatherData.daily
        .slice(1, 7)
        .map((day) => day.temp.day);
      const dailyWind = weatherData.daily
        .slice(1, 7)
        .map((day) => day.wind_speed);

      setLabels(dailyLabels);
      setTemp(dailyTemp);
      setWind(dailyWind);
      setText('Day Of The Week');
    }

    if (viewMode === 'today' && weatherData?.hourly) {
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

      setLabels(hourlyLabels);
      setTemp(hourlyTemp);
      setWind(hourlyWind);
      setText('Hours Of The Day');
    }

    if (viewMode === 'tomorrow' && weatherData?.hourly) {
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

      setLabels(hourlyLabels);
      setTemp(hourlyTemp);
      setWind(hourlyWind);
      setText('Hours Of The Day');
    }
  }, [viewMode, weatherData]);

  useEffect(() => {
    const handleResize = () => {
      const viewWidth = window.innerWidth;
      let fontSize, titleFontSize, tickFontSize, lineWidth, padding;

      if (viewWidth <= 500) {
        fontSize = 10;
        titleFontSize = 12;
        tickFontSize = 10;
        lineWidth = 1;
        padding = 0;
      } else {
        fontSize = 14;
        titleFontSize = 18;
        tickFontSize = 14;
        lineWidth = 2;
        padding = 12;
      }

      setChartOptions({
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              color: 'white',
              font: {
                size: fontSize, // Adjust font size based on view width
              },
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
                size: titleFontSize, // Adjust title size based on view width
              },
            },
            ticks: {
              color: 'white',
              font: {
                size: tickFontSize, // Adjust tick size based on view width
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
                size: titleFontSize, // Adjust title size based on view width
              },
            },
            ticks: {
              color: 'white',
              font: {
                size: tickFontSize, // Adjust tick size based on view width
              },
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.2)',
            },
          },
        },
        layout: {
          padding: padding,
        },
        elements: {
          line: {
            borderWidth: lineWidth, // Adjust line width based on view width
          },
        },
      });
    };

    // Initial setup
    handleResize();

    // Add event listener to handle window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, [text]);

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Temperature (°C)',
        data: temp,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Wind (mph)',
        data: wind,
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  if (!weatherData || !weatherData.daily) {
    return <div>No weather data available</div>;
  }

  return (
    <div className="w-[90vw] h-[30vh] lg:w-[75vw] lg:h-[50vh] mt-7 lg:mt-7 sml:mt-20">
      <Line className="" data={data} options={chartOptions} />
    </div>
  );
};

export default WeatherChart;
