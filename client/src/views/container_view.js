const PubSub = require('../helpers/pub_sub.js');
const UserDetailsView = require('./user_details_view.js');
const SmokedView = require('./smoked_view.js');
const CigaretteDetailsView = require('./cigarette_detail_view.js');
const TimerView = require('./timer_view.js');
const ChartView = require('./chart_view.js');


const ContainerView = function (element) {
  this.element = element;
}

ContainerView.prototype.bindEvents = function() {
  this.createSmokedButton();
  this.createTimer();
  this.createInputData();
  this.createCigaretteData();
  this.createChart();
  PubSub.subscribe('Cigarettes:user-data-ready', (evt) => {
    const items = evt.detail;
    this.renderInputData(items);
  });
  PubSub.subscribe('Cigarettes:update-ready', (event) => {
    const items = event.detail;
    this.renderInputData(items)
  })
  PubSub.subscribe('Cigarettes:cigarette-data-ready', (evt) =>{
    const items = evt.detail;
    this.renderCigaretteData(items);
    this.renderChart(items);
  });
};

ContainerView.prototype.createTimer = function () {
  const timer = new TimerView(this.element);
  timer.bindEvents();
};

ContainerView.prototype.createSmokedButton = function () {
  const smokeButton = new SmokedView(this.element);
  smokeButton.bindEvents();
};

ContainerView.prototype.createInputData = function () {
  const inputData = document.createElement('div');
  inputData.id = 'input-data-container';
  this.element.appendChild(inputData);
};

ContainerView.prototype.renderInputData = function (items) {
  const dataContainer = document.getElementById('input-data-container');
  dataContainer.innerHTML = '';
  items.forEach((item) => {
    const userDetailsView = new UserDetailsView(dataContainer, item);
    userDetailsView.render();
  })
};

ContainerView.prototype.createCigaretteData = function () {
  const cigaretteData = document.createElement('div');
  cigaretteData.id = 'cigarette-data-container';
  this.element.appendChild(cigaretteData);
};

ContainerView.prototype.renderCigaretteData = function (items) {
  const dataContainer = document.getElementById('cigarette-data-container');
  dataContainer.innerHTML = '';
  items.forEach((item) => {
    const cigaretteDetailView = new CigaretteDetailsView(dataContainer, item);
    cigaretteDetailView.render();
  })
};

ContainerView.prototype.createChart = function () {
  const chartContainer = document.createElement('div');
  chartContainer.id = 'chart';
  this.element.appendChild(chartContainer);
};

ContainerView.prototype.renderChart = function (items) {
  const chartContainer = document.getElementById('chart');
  chartContainer.innerHTML = '';
  debugger
  const chart = new ChartView(chartContainer, items);
  chart.createChart();
};

module.exports = ContainerView;
