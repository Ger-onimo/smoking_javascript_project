const RequestHelper = require('../helpers/request_helper.js');
const PubSub =require('../helpers/pub_sub.js');
const TimerFunction = require('../helpers/timestamp_calculations.js');

const Savings = function () {
  this.pack = 20;
};

// daily savings accummulator

// each daily saving add to accummulator
// use a reduce or code an accummulator

/// hardcoded long version of saving calculation:
Savings.prototype.dailySavingCalculator = function () {

  const singleCigCost = cost.value/this.pack; // pack is constant in constructor line 8
  const dailySaving = daily.value * singleCigCost;
  const savingToDate = dailySaving * TimerFunction;
  return savingToDate;
};

module.exports = Savings;





/// function for getting the number of days since stopped smoking
// Savings.prototype.daysSinceStopped = function (timestamp) {
//   const difference = current date - timestamp day decided to quit
//   //current date from smoked button/Date.now - not sure
//   return difference;
// };
