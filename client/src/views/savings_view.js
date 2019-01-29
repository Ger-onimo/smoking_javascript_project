const PubSub = require('../helpers/pub_sub.js');
const Savings = require('../models/savings.js');

const SavingsView = function (element) {
  this.element = element;
  this.savings = null;
};

SavingsView.prototype.bindEvents = function () {
  const savingCalc = new Savings();
  savingCalc.bindEvents();

  PubSub.subscribe('FormView:new-user', (event) => {
    this.savings = savingCalc.dailySavingCalculator();
    this.createContainer();
    this.createSavings();
  })
  PubSub.subscribe('Cigarettes:cigarette-data-ready', (event) => {
    this.savings = savingCalc.dailySavingCalculator();
    this.createContainer();
    this.createSavings();
  })
};

SavingsView.prototype.createSavings = function () {
  const savingsElement = document.getElementById('saving-accumulator');
  savingsElement.textContent = `Saving total: £${this.savings[this.savings.length-1]}`;
};

SavingsView.prototype.createContainer = function () {
  const container = document.createElement('div');
  container.id = 'savings-container';
  const savings = document.createElement('h3');
  savings.id = 'saving-accumulator';
  container.appendChild(savings);
  this.element.appendChild(container);
};

module.exports = SavingsView;
