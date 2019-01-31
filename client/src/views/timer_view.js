const TimerFunction = require('../models/timer-function.js');
const PubSub = require('../helpers/pub_sub.js');
const moment = require('moment');

const TimerView = function (element) {
  this.element = element;
  this.time = document.getElementsByTagName('time')[0];
};

TimerView.prototype.bindEvents = function () {
  const timer = new TimerFunction();

  const button = document.getElementById('timer-button');
  button.addEventListener('click', (event) => {
    if (!document.getElementById('timer-container')) {
      this.createTimer()
      timer.runTimer()
    }
    this.hide();
  })


  // PubSub.subscribe('FormView:new-user', (event) => {
  //   if (!document.getElementById('timer-container')) {
  //     this.createTimer()
  //     timer.runTimer()
  //   }
  //
  // });
  //
  // this.timerButton();

  PubSub.subscribe('SmokedView:user-smoked', (event) => {
    const timerContainer = document.getElementById('timer-container');
    if(document.getElementById('timer-container')) {
      this.element.removeChild(timerContainer);
    }
    this.createTimer();
    timer.runTimer();
  });

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


TimerView.prototype.timerButton = function () {
  const button = document.getElementById('timer-button');
  button.addEventListener('click', (event) => {
    this.hide();
  })
};

TimerView.prototype.hide = function () {
  const login = document.getElementById('initial-entry-form');
  login.style.display = 'none';

  const user = document.getElementById('input-data-container');
  user.style.display = 'none';

  const savings = document.getElementById('savings-container');
  savings.style.display = 'none';

  const motive = document.getElementById('motive-container');
  if (motive){
  motive.style.display = 'none';}

  const cig = document.getElementById('cigarette-data-container');
  if (cig){
  cig.style.display = 'none';}

  let form = document.getElementById('timer-container');
  if (form.style.display === 'block') {
    form.style.display = 'none';
  }
  else {
    form.style.display = 'block';
  }
};


module.exports = TimerView;
