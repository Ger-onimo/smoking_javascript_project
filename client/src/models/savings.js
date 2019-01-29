const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');
const TimeStampCalculations = require('../helpers/timestamp_calculations.js');
const moment = require('moment');

const Savings = function () {
  this.pack = 20;
  this.cigaretteData = null;
  this.userData = null;
  this.timediff = new TimeStampCalculations();
};


Savings.prototype.bindEvents = function () {
  PubSub.subscribe('Cigarettes:user-data-ready', (event) => {
    this.userData = event.detail[0];
  })
  PubSub.subscribe('Cigarettes:cigarette-data-ready', (event) => {
    let initialData = {};
    this.cigaretteData = event.detail;
    initialData = {
      pack: 20,
      cigData: this.cigaretteData,
      userData: this.userData,
    }
    return initialData
  })

};

Savings.prototype.dailySavingCalculator = function () {
  const singleCigCost = this.userData.cost/this.pack;
  let totalDeductions= 0;

  const savingsArray = this.cigaretteData.map((timestamp) => {

    totalDeductions += singleCigCost;
    const timeObject = this.timediff.timeBetween(timestamp.timestamp ,this.userData.timestamp);
    const timeMS = timeObject._milliseconds
    const dailySaving = this.userData.daily * singleCigCost;
    const millisecondSaving = dailySaving / 24 / 60 / 60 / 1000;
    const savingToDate = millisecondSaving * timeMS;
    const final = savingToDate - totalDeductions;
    const roundedFinal = final.toFixed(2);
    return roundedFinal;
  })
  return savingsArray;
};

Savings.prototype.continuedSaving = function (object) {
  const interval = setInterval(this.accumulate(object), 1000);
};

Savings.prototype.accumulate = function (object) {
  const singleCigCost = this.userData.cost/this.pack;
  const totalDeductions = this.cigaretteData.length * singleCigCost;

  const time = this.timediff.timeBetween(moment(), this.userData.timestamp);
  const timeMS = time._milliseconds;

  const dailySaving = this.userData.daily * singleCigCost;
  const millisecondSaving = dailySaving / 24 / 60 / 60 / 1000;


  const savingToDate = millisecondSaving * timeMS;
  const final = savingToDate - totalDeductions;
  const roundedFinal = final.toFixed(2);


  document.getElementById('test-acc').innerHTML = `£ ${roundedFinal}`;
};

module.exports = Savings;
