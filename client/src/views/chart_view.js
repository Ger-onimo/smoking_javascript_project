const Highcharts = require('highcharts');

const ChartView = function (container, items) {
  this.container = container;
  this.items = items;
}

ChartView.prototype.createChart = function () {
  const chartContainer = document.createElement('div');

  const chart = Highcharts.chart(this.container, {
    chart: {
      type: 'spline'
    },
    title: {
      text: 'Cigarettes Smoked'
    },
    xAxis: {
      type: 'datetime',
      title: 'Time'
    },
    yAxis: {
      title: 'Smoked Cigarette'
    }
  })
};

module.exports = ChartView;
