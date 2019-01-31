const PubSub = require('../helpers/pub_sub.js');
const Savings = require('../models/savings.js');

const SavingsView = function (element) {
  this.element = element;
  this.savings = null;
  this.saving = new Savings();
};

SavingsView.prototype.bindEvents = function () {
  this.saving.bindEvents();

  PubSub.subscribe('FormView:new-user', (event) => {
    this.savings = this.saving.dailySavingCalculator();
    this.createContainer();
    this.createSavings();

  })
  PubSub.subscribe('Cigarettes:cigarette-data-ready', (event) => {
    this.savings = this.saving.dailySavingCalculator();
    this.createContainer();
    this.createSavings();
  })
  this.savingButton();
};

SavingsView.prototype.createSavings = function () {
  const savingsElement = document.getElementById('saving-accumulator');
  savingsElement.textContent = `You've saved: £${this.savings[this.savings.length-1]}!`;
};

SavingsView.prototype.createContainer = function () {
  if (!document.getElementById('savings-container')){
    const container = document.createElement('div');
    container.id = 'savings-container';
    const savings = document.createElement('p');
    savings.id = 'saving-accumulator';
    container.appendChild(savings);
    this.element.appendChild(container);
  }
};

SavingsView.prototype.savingButton = function () {
  const button = document.getElementById('savings-button');
  button.addEventListener('click', (event) => {
    this.hide();
  })
};

SavingsView.prototype.hide = function () {
  const login = document.getElementById('initial-entry-form');
  login.style.display = 'none';

  const user = document.getElementById('input-data-container');
  user.style.display = 'none';

  const motive = document.getElementById('motive-container');
  if (motive){
  motive.style.display = 'none';}

  const timer = document.getElementById('timer-container');
  if (timer){
  timer.style.display = 'none';}

  const cig = document.getElementById('cigarette-data-container');
  if (cig){
  cig.style.display = 'none';}

  let form = document.getElementById('savings-container');
  if (form.style.display === 'block') {
    form.style.display = 'none';
  }
  else {
    form.style.display = 'block';
  }
};
module.exports = SavingsView;
