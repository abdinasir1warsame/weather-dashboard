import React from 'react';
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

const WeatherChart = () => {
  const labels = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Temperature (°C)',
        data: [22, 19, 24, 21, 23, 25, 20],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Humidity (%)',
        data: [60, 55, 70, 65, 60, 75, 80],
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
          color: 'white', // Change the color of the legend text
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
          text: 'Day of the Week',
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
          color: 'rgba(255, 255, 255, 0.2)', // Change the color of x-axis grid lines
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
          color: 'rgba(255, 255, 255, 0.2)', // Change the color of y-axis grid lines
        },
      },
    },
    layout: {
      padding: 20, // Adds padding around the chart
    },
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Change the background color of the entire chart area
  };

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
