const PubSub = require('../helpers/pub_sub.js');

const TimerView = function (element) {
  this.element = element;
};


TimerView.prototype.bindEvents = function () {
  this.createTimer();
  this.runTimer();
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


TimerView.prototype.runTimer = function () {
  let time = document.getElementsByTagName('time')[0],
    reset = document.getElementById('reset'),
    seconds = 0, minutes = 0, hours = 0, days = 0,
    t;

  }


module.exports = TimerView;
