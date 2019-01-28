const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');
const TimeStampCalculations = require('../helpers/timestamp_calculations.js');

const Savings = function () {
  this.pack = 20;
  this.timediff.timeBetween(); = new TimeStampCalculations();
};

// TODO: daily savings accummulator

// each daily saving add to accummulator
// use a reduce or code an accummulator

Savings.prototype.dailySavingCalculator = function () {
  PubSub.subscribe('Cigarettes:user-data-ready', (event) => {
    console.log(event.detail[0]);
  })
  // debugger
    const singleCigCost = event.detail.cost/this.pack;
    const dailySaving = event.detail.daily * singleCigCost;
    const savingToDate = dailySaving * 2;

  return savingToDate.toFixed(2);
};

module.exports = Savings;
