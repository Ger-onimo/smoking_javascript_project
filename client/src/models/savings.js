const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');
const TimeStampCalculations = require('../helpers/timestamp_calculations.js');

const Savings = function () {
  this.pack = 20;
  this.cigaretteData;
  this.userData;
  this.timediff = new TimeStampCalculations();
};


Savings.prototype.bindEvents = function () {
  PubSub.subscribe('Cigarettes:cigarette-data-ready', (event) => {
    this.cigaretteData = event.detail;
  })
  PubSub.subscribe('Cigarettes:user-data-ready', (event) => {
    this.userData = event.detail[0];
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
    const roundedSaving = savingToDate.toFixed(2);
    const final = roundedSaving - totalDeductions;
    return final;
  })
  return savingsArray;
};

Savings.prototype.deductions = function () {

};

module.exports = Savings;
