// label 로직 시작
const DATA_COUNT = 25;
const labels = [];

let nextLabel = 15200;
for (let i = 0; i < DATA_COUNT; ++i) {
  labels.push(nextLabel.toString());
  nextLabel = nextLabel + 200;
}
// label 끝

const allData = {
  CYL1: [
    { x: 15350, y: 50 },
    { x: 15550, y: 75 },
    { x: 15750, y: 65 },
    { x: 15990, y: 60 },
    { x: 16500, y: 50 },
    { x: 17100, y: 50 },
    { x: 17400, y: 40 },
    { x: 17900, y: 45 },
    { x: 18100, y: 50 },
    { x: 18300, y: 50 },
    { x: 18500, y: 40 },
    { x: 19100, y: 40 },
    { x: 19700, y: 50 },
    { x: 20120, y: 60 },
  ],
  CYL2: [
    { x: 15350, y: 40 },
    { x: 15550, y: 44 },
    { x: 15750, y: 52 },
    { x: 15990, y: 60 },
    { x: 16500, y: 60 },
    { x: 17100, y: 55 },
    { x: 17400, y: 35 },
    { x: 17900, y: 40 },
    { x: 18100, y: 45 },
    { x: 18300, y: 50 },
    { x: 18500, y: 45 },
    { x: 19100, y: 50 },
    { x: 19700, y: 50 },
    { x: 20120, y: 58 },
  ],
  CYL3: [
    { x: 15350, y: 35 },
    { x: 15550, y: 38 },
    { x: 15750, y: 40 },
    { x: 15990, y: 40 },
    { x: 16500, y: 45 },
    { x: 17100, y: 50 },
    { x: 17400, y: 43 },
    { x: 17900, y: 38 },
    { x: 18100, y: 33 },
    { x: 18300, y: 20 },
    { x: 18500, y: 28 },
    { x: 19100, y: 50 },
    { x: 19700, y: 60 },
    { x: 20120, y: 65 },
  ],
  MCR: [
    { x: 15350, y: 45 },
    { x: 15550, y: 45 },
    { x: 15750, y: 50 },
    { x: 15990, y: 30 },
    { x: 16500, y: 25 },
    { x: 17100, y: 30 },
    { x: 17400, y: 40 },
    { x: 17900, y: 50 },
    { x: 18100, y: 50 },
    { x: 18300, y: 60 },
    { x: 18500, y: 50 },
    { x: 19100, y: 60 },
    { x: 19700, y: 50 },
    { x: 20120, y: 50 },
  ],
};

const data = {
  labels: labels,
  datasets: [
    {
      label: 'CYL1',
      data: allData.CYL1,
      backgroundColor: 'rgba(255, 0, 0, 0.8)',
      borderColor: 'rgba(255, 0, 0, 0.8)',
      // xAxisID: 'x2', // Specify to which axes to link
      yAxisID: 'y',
      showLine: true,
    },
    {
      label: 'CYL2',
      data: allData.CYL2,
      backgroundColor: 'rgba(130, 220, 27, 1)',
      borderColor: 'rgba(130, 220, 27, 1)',
      // xAxisID: 'x2', // Specify to which axes to link
      yAxisID: 'y',
      showLine: true,
    },
    {
      label: 'CYL3',
      data: allData.CYL3,
      backgroundColor: 'rgba(41, 123, 204, 1)',
      borderColor: 'rgba(41, 123, 204, 1)',
      // xAxisID: 'x2', // Specify to which axes to link
      yAxisID: 'y',
      showLine: true,
    },
    {
      label: 'MCR',
      data: allData.MCR,
      backgroundColor: 'rgb(0, 0, 0)',
      borderColor: 'rgb(0, 0, 0)',
      borderDash: [5, 5],
      // xAxisID: 'x2', // Specify to which axes to link
      yAxisID: 'y1',
      showLine: true,
    },
  ],
};

const config = {
  type: 'scatter',
  data: data,
  options: {
    responsive: true,
    // interaction: {
    //   mode: 'index',
    //   intersect: false,
    // },
    // stacked: false,
    plugins: {
      title: {
        display: true,
        text: 'Iron and %MCR',
        font: {
          family: 'Times',
          size: 50,
        },
      },
    },
    scales: {
      x: {
        min: 15000,
        max: 20500,
        ticks: {
          stepSize: 500,
        },
      },
      y: {
        title: {
          display: true,
          text: 'Iron',
          color: '#191',
          font: {
            family: 'Times',
            size: 30,
          },
        },
        type: 'linear',
        display: true,
        position: 'left',
        min: 0,
        max: 300,
        ticks: {
          stepSize: 10,
        },
      },
      y1: {
        title: {
          display: true,
          text: 'MCR%',
          color: '#191',
          font: {
            family: 'Times',
            size: 30,
          },
        },
        type: 'linear',
        display: true,
        position: 'right',
        min: 0,
        max: 100,
        ticks: {
          stepSize: 10,
        },
        grid: {
          // grid line settings
          drawOnChartArea: false,
        },
      },
    },
  },
};

const multiLineChart = new Chart(
  document.getElementById('multi-line-chart'),
  config
);
