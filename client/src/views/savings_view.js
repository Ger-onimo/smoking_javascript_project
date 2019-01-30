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
      if (!document.getElementById('savings-container')) {
      this.createSavings();
}
  })

  this.savingsButton();
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

SavingsView.prototype.savingsButton = function () {
  const button = document.getElementById('savings-button');
  button.addEventListener('click', (event) => {
    this.hideSavings();
  })
};

SavingsView.prototype.hideSavings = function () {
  if (document.getElementById('savings-container')) {
    let form = document.getElementById('savings-container');

    if (form.style.display === 'block') {
      form.style.display = 'none';
    }
    else {
      form.style.display = 'block';
    }
  }
};

module.exports = SavingsView;
