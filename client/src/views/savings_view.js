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
    this.createSavings();
  })
  PubSub.subscribe('SmokedView:user-smoked', (event) => {
    debugger
    this.savings = savingCalc.dailySavingCalculator();
    this.createSavings();
  })

};

SavingsView.prototype.createSavings = function () {
  const container = document.createElement('div');
  container.id = 'savings-container';
  const savings = document.createElement('h3');
  savings.classList.add('saving-accumulator');
  savings.textContent = `Saving total: £${this.savings[this.savings.length - 1]}`;
  container.appendChild(savings);
  this.element.appendChild(container);
};

module.exports = SavingsView;
