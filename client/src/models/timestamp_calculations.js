const PubSub = require('../helpers/pub_sub.js');
const moment = require('moment');

const TimestampCalculations = function () {

};

TimestampCalculations.prototype.timeBetween = function (earlyTime, latestTime) {
  const diff = moment.duration(latestTime.diff(earlyTime));
  console.log(diff);
};

module.exports = TimestampCalculations;
