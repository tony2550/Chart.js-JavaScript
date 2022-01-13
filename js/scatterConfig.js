const data = {
  datasets: [
    {
      label: 'Scatter Dataset',
      data: [
        {
          x: 22.5,
          y: 68,
        },
        {
          x: 23,
          y: 76,
        },
        {
          x: 21.5,
          y: 79,
        },
        {
          x: 28,
          y: 65,
        },
        {
          x: 34,
          y: 51,
        },
        {
          x: 35,
          y: 76,
        },
        {
          x: 36,
          y: 58,
        },
        {
          x: 38,
          y: 60,
        },
        {
          x: 40,
          y: 60,
        },
        {
          x: 42,
          y: 57,
        },
      ],
      backgroundColor: 'rgb(255, 99, 132)',
    },
  ],
};
// </block:setup>

// <block:config:0>

const config = {
  type: 'scatter',
  data: data,
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Iron VS TBN (On Board)',
        font: {
          family: 'Times',
          size: 40,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'TBN(mgKOH/g)',
          color: '#191',
          font: {
            family: 'Times',
            size: 20,
          },
        },
        type: 'linear',
        position: 'bottom',
        grid: {
          borderDash: [5],
          tickBorderDash: [5],
        },
        min: 0,
        max: 100,
      },
      y: {
        title: {
          display: true,
          text: 'Iron(mg/kg)',
          color: '#911',
          font: {
            family: 'Times',
            size: 20,
          },
        },
        type: 'linear',
        min: 0,
        max: 300,
      },
    },
  },
};
// </block:config>

const scatterChart = new Chart(
  document.getElementById('scatter-chart'),
  config
);
