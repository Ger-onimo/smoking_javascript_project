const FormView = require('./views/form_view.js');
const ContainerView = require('./views/container_view.js');
const Cigarettes = require('./models/cigarettes.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('Javascript Loaded');
  const form = document.querySelector('form#initial-entry-form');
  const formView = new FormView(form);
  formView.bindEvents()

  const cigarettes = new Cigarettes();
  cigarettes.bindEvents();

const container = document.querySelector('section#container-wrapper');
  const containerView = new ContainerView(container);
  containerView.bindEvents();

///timer

  let time = document.getElementsByTagName('time')[0],
    reset = document.getElementById('reset'),
    seconds = 0, minutes = 0, hours = 0, days = 0,
    t;

    function addTimePerUnit() {
      seconds++;
      if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
          minutes = 0;
          hours++;
          if (hours >= 24) {
            hours = 0;
            days++;
          }
        }
      }

      time.textContent = (days ? (days > 9 ? days : "0" + days) : "00") + ":"
      + (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":"
      + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":"
      + (seconds > 9 ? seconds : "0" + seconds);

      timer();
    }

    function timer() {
      t = setTimeout(addTimePerUnit, 1000);
      // debugger;
    }

    timer();

// timer
})
