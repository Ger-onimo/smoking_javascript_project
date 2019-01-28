const RequestHelper = require('../helpers/request_helper.js');
const PubSub =require('../helpers/pub_sub.js');


// daily savings accummulator

each daily saving add to accummulator
use a reduce or code an accummulator

/// hardcoded long version of saving calculation:
Cigarettes.prototype.dailySavingCalculator = function () {
  // const pack = 20; // fixed value
  // const cost = 9; // cost value from db
  // const daily = 25; // daily value from db
  // const daysSinceStopped = 10; // work that out from counter or date differences
  const singleCigCost = cost.value/this.pack; // pack is constant in constructor line 8
  const dailySaving = daily.value * singleCigCost;
  const savingToDate = dailySaving * daysSinceStopped;
  return savingToDate;
};
/// function for getting the number of days since stopped smoking
Cigarettes.prototype.daysSinceStopped = function (timestamp) {
  const difference = current date - timestamp day decided to quit
  //current date from smoked button/Date.now - not sure
  return difference;
};
