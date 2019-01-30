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
    this.cigaretteData = event.detail;
  })
};

Savings.prototype.dailySavingCalculator = function () {
  const singleCigCost = this.userData.cost/this.pack;
  let totalDeductions= 0;
  let totalArray = [];

<<<<<<< HEAD
  if (this.cigaretteData.length === 0) {
    const timeObject = this.timediff.timeBetween(moment() ,this.userData.timestamp);
=======
  const savingsArray = this.cigaretteData.map((timestamp) => {
    totalDeductions += singleCigCost;
    const timeObject = this.timediff.timeBetween(timestamp.timestamp ,this.userData[0].timestamp);
>>>>>>> develop
    const timeMS = timeObject._milliseconds
    const dailySaving = this.userData.daily * singleCigCost;
    const millisecondSaving = dailySaving / 24 / 60 / 60 / 1000;
    const savingToDate = millisecondSaving * timeMS;
    const final = savingToDate - totalDeductions;
    const roundedFinal = final.toFixed(2);
    totalArray.push(roundedFinal);
  }
  else {
    totalArray = this.cigaretteData.map((timestamp) => {
      totalDeductions += singleCigCost;
      const timeObject = this.timediff.timeBetween(moment() ,this.userData.timestamp);
      const timeMS = timeObject._milliseconds
      const dailySaving = this.userData.daily * singleCigCost;
      const millisecondSaving = dailySaving / 24 / 60 / 60 / 1000;
      const savingToDate = millisecondSaving * timeMS;
      const final = savingToDate - totalDeductions;
      const roundedFinal = final.toFixed(2);
      return roundedFinal;
    })
  }
  return totalArray;
};

module.exports = Savings;
