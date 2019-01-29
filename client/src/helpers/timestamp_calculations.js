const PubSub = require('../helpers/pub_sub.js');
const moment = require('moment');

const TimestampCalculations = function () {

};
TimestampCalculations.prototype.timeBetween = function (latestTime, earlyTime) {
  const t1 = moment(latestTime);
  const t2 = moment(earlyTime);
  const diff = moment.duration(t1.diff(t2));
  return diff;
};

module.exports = TimestampCalculations;
