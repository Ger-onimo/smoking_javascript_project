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
  const test = document.createElement('div');
  test.id = 'test-acc';
  this.element.appendChild(test);

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

SavingsView.prototype.createAccumulated = function () {

};
module.exports = SavingsView;
