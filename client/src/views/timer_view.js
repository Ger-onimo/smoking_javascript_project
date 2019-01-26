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

module.exports = TimerView;
