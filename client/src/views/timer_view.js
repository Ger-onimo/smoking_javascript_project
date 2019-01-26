const PubSub = require('../helpers/pub_sub.js');

const TimerView = function (element) {
  this.element = element;
};


TimerView.prototype.bindEvents = function () {
  this.createTimer();
};

TimerView.prototype.createTimer = function () {

  const container = document.createElement('div');
  container.id = 'timer-container';
  const timer = document.createElement('time');
  timer.classList.add('timer-zeros');
  timer.textContent = "00:00:00:00";
  container.appendChild(timer);
  this.element.appendChild(container);

};

// let time = document.getElementsByTagName('time')[0],
// reset = document.getElementById('reset'),
// seconds = 0, minutes = 0, hours = 0, days = 0,
// t;
//
// function addTimePerUnit() {
//   seconds++;
//   if (seconds >= 60) {
//     seconds = 0;
//     minutes++;
//     if (minutes >= 60) {
//       minutes = 0;
//       hours++;
//       if (hours >= 24) {
//         hours = 0;
//         days++;
//       }
//     }
//   }
//
//   time.textContent = (days ? (days > 9 ? days : "0" + days) : "00") + ":"
//   + (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":"
//   + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":"
//   + (seconds > 9 ? seconds : "0" + seconds);
//
//   timer();
// }
//
// function timer() {
//   t = setTimeout(addTimePerUnit, 1000);
// }
//
// timer();
//
// /* Reset button */
// reset.onclick = function() {
//   time.textContent = "00:00:00:00";
//   seconds = 0; minutes = 0; hours = 0; days = 0;
// }

module.exports = TimerView;
