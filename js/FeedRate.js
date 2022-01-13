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

// <block:config:0>

const config = {
  type: 'line',
  data: data,
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
          text: 'Main Engine Load Total',
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
        // min: 0,
        // max: 100,
      },
      y: {
        title: {
          display: true,
          text: 'Sylinder of feed rate',
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
        // min: 0,
        // max: 300,
      },
    },
  },
};
// </block:config>

const scatterChart = new Chart(document.getElementById('myChart'), config);
