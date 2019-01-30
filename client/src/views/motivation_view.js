const PubSub = require('../helpers/pub_sub.js');
const RandMotivation = require("../models/smoking_facts.js")
const MotivationView = function (element) {
  this.element = element;
  this.text = null;
};

MotivationView.prototype.bindEvents = function () {
  const randMotivation = new RandMotivation();

  const button = document.getElementById('random-motive');
  button.addEventListener('click', (event) => {
    if(!document.getElementById('motive-container')) {

      this.text = randMotivation.get();
      this.createMotivContainer();
    };
    this.hide();
  })

  // PubSub.subscribe('FormView:new-user', (event) => {
  //   if(!document.getElementById('motive-container')) {
  //     this.text = randMotivation.get();
  //     this.createMotivContainer();
  //   };
  //
  //   this.motiveButton();
  // });

  PubSub.subscribe('SmokedView:user-smoked', (event) => {
    const motivContainer = document.getElementById('motive-container');
    if (document.getElementById('motive-container')) {
      this.element.removeChild(motivContainer);
    }
    this.text = randMotivation.get();
    this.createMotivContainer();
  });

};

MotivationView.prototype.createMotivContainer = function () {
  const container = document.createElement('div');
  container.id = 'motive-container';
  const motive = document.createElement('p');
  motive.classList.add('motive-text');
  motive.textContent = `${this.text}`;
  container.appendChild(motive);
  this.element.appendChild(container);
};

MotivationView.prototype.motiveButton = function () {
  const button = document.getElementById('random-motive');
  button.addEventListener('click', (event) => {
    this.hide();
  })
};

MotivationView.prototype.hide = function () {
  const login = document.getElementById('initial-entry-form');
  login.style.display = 'none';
  
  const user = document.getElementById('input-data-container');
  user.style.display = 'none';

  const savings = document.getElementById('savings-container');
  savings.style.display = 'none';

  const timer = document.getElementById('timer-container');
  if (timer){
  timer.style.display = 'none';}

  const cig = document.getElementById('cigarette-data-container');
  if (cig){
  cig.style.display = 'none';}

  let form = document.getElementById('motive-container');
  if (form.style.display === 'block') {
    form.style.display = 'none';
  }
  else {
    form.style.display = 'block';
  }
};

module.exports = MotivationView;
