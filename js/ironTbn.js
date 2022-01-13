import GLOVIStwodata from './GLOVIStwo.js';
import GLOVISxdata from './GLOVISxxxxx.js';

console.log(GLOVIStwodata);
console.log(GLOVISxdata);

// filter는 나중에 쓸 것
const filterDatasets = (jsondata) => {
  let keys = Object.keys(jsondata[0]);
  return jsondata.filter((data) => data);
};

//  map example
const numbers = [1, 2, 3];

const doubleNumArray = numbers.map((num) => {
  return num * 3;
});

const feed_rate_labels = ['mainenginet', 'cylofeedrate'];
const iron_avg_labels = ['mainenginet', 'avgf'];
const iron_mcr_labels = [
  'mainenginet',
  'engineload',
  'fc1',
  'fc2',
  'fc3',
  'fc4',
  'fc5',
  'fc6',
  'fc7',
  'fc8',
  'fc9',
  'fc10',
  'fc11',
  'fc12',
  'fc13',
  'fc14',
];
const iron_tbn_labels = ['avgbn', 'avgf'];
const power_sulfer_labels = ['mainenginet', 'engineload', 'sulfurc'];

const makeDatasets = (jsondata) => {
  let labelX = feed_rate_labels[0];
  let labelY = feed_rate_labels[1];
  let resultdata = [];
  for (let i = 0; i < jsondata.length; i++) {
    let jsonObj = {};
    jsonObj['x'] = jsondata[i][labelX];
    jsonObj['y'] = jsondata[i][labelY];
    resultdata.push(jsonObj);
  }
  return resultdata;
};

console.log(makeDatasets(GLOVIStwodata));

const data = {
  datasets: [
    {
      label: 'GLOVIS xxxxx',
      data: makeDatasets(GLOVISxdata),
      backgroundColor: 'rgb(255, 0, 0)',
      borderColor: 'rgb(255, 0, 0)',
    },
    {
      label: 'GLOVIS two',
      data: makeDatasets(GLOVIStwodata),
      backgroundColor: 'rgb(0, 0, 255)',
      borderColor: 'rgb(0, 0, 255)',
    },
  ],
};
// </block:setup>

const plugin = {
  id: 'custom_canvas_background_color',
  beforeDraw: (chart) => {
    const ctx = chart.canvas.getContext('2d');
    ctx.save();
    ctx.globalCompositeOperation = 'destination-over';
    ctx.fillStyle = 'lightGreen';
    ctx.fillRect(0, 0, chart.width / 2, chart.height / 2);
    console.log(chart.width);
    console.log(chart.height);
    ctx.restore();
  },
};

// <block:config:0>

const config = {
  type: 'scatter',
  data: data,
  plugins: [plugin],
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Iron VS TBN (On Board)',
        color: 'rgb(0, 255, 0)',
        font: {
          family: 'Helvetica',
          size: 40,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'TBN(mgKOH/g)',
          color: 'rgb(0, 255, 0)',
          font: {
            family: 'Helvetica',
            size: 20,
          },
        },
        type: 'linear',
        position: 'bottom',
        grid: {
          color: '#808080',
          // borderDash: [5],
          // tickBorderDash: [5],
        },
        ticks: { color: '#fff', font: 'Helvetica' },
        suggestedMin: 12000,
        suggestedMax: 25000,
      },
      y: {
        title: {
          display: true,
          text: 'Iron(mg/kg)',
          color: 'rgb(105, 113, 123)',
          font: {
            family: 'Helvetica',
            size: 20,
          },
        },
        type: 'linear',
        grid: {
          color: '#808080',
          // borderDash: [5],
          // tickBorderDash: [5],
        },
        ticks: { color: '#fff', font: 'Helvetica' },
        suggestedMin: 0,
        suggestedMax: 5,
      },
    },
  },
};
// </block:config>

const myChart = new Chart(document.getElementById('myChart'), config);
