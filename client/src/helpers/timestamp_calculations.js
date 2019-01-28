const PubSub = require('../helpers/pub_sub.js');
const moment = require('moment');

const TimestampCalculations = function () {

};
TimestampCalculations.prototype.timeBetween = function (latestTime, earlyTime) {
  const diff = moment.duration(latestTime.diff(earlyTime));
};

module.exports = TimestampCalculations;
