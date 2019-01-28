const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');
const TimeStampCalculations = require('../helpers/timestamp_calculations.js');

const Savings = function () {
  this.pack = 20;
  this.timestamp = new TimeStampCalculations();
};

// daily savings accummulator

// each daily saving add to accummulator
// use a reduce or code an accummulator

/// hardcoded long version of saving calculation:
Savings.prototype.dailySavingCalculator = function () {

  // const singleCigCost = cost.value/this.pack; // pack is constant in constructor line 8
  // const dailySaving = daily.value * singleCigCost;
  // const savingToDate = dailySaving * this.timestamp;
  const savingToDate = 12
  return savingToDate;
};

module.exports = Savings;
