const data = {
  datasets: [
    {
      label: 'TBN(mgKOH/g)',
      data: [
        {
          x: -10,
          y: 0,
        },
        {
          x: 0,
          y: 10,
        },
        {
          x: 10,
          y: 5,
        },
        {
          x: 0.5,
          y: 5.5,
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
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
      },
    },
  },
};
// </block:config>

const scatterChart = new Chart(document.getElementById('scatterChart'), config);
