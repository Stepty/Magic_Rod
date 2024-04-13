import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { useState, useEffect } from 'react';

function GraphHolder() {
    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * (100-0+1)));

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomNumber(Math.floor(Math.random() * (100-0+1)));
    }, 1000); // Change the number here to adjust the time interval (1000 ms = 1 second)

    return () => clearInterval(interval); // This is to clear the interval when the component unmounts
  }, []);

  const data = {
    labels: ['Kill', 'Me', 'RIght', 'Fucking', 'NOw', 'Please'],
    datasets: [
      {
        label: 'Magic Rod Data',
        backgroundColor: 'rgba(255,192,192,0.4)',
        borderColor: 'rgba(255,192,192,1)',
        data: [randomNumber, 59, randomNumber, 81, randomNumber, randomNumber, 40],
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div className="">
        <Line className="h-full w-full" data={data} options={options} />
    </div>
  )
}

export default GraphHolder;