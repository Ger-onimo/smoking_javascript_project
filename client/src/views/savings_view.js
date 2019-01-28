const PubSub = require('../helpers/pub_sub.js');

const SavingsView = function (element) {
  this.element = element;
};

SavingsView.prototype.bindEvents = function () {
  // const timer = new SavingsFunction();
    PubSub.subscribe('FormView:new-user', (event) => {
      this.createSaving();
  })
};

SavingsView.prototype.createSaving = function () {
  const container = document.createElement('div');
  container.id = 'savings-container';
  const savings = document.createElement('h3');
  savings.classList.add('saving-accumulator');
  savings.textContent = `test savings` ;
  container.appendChild(savings);
  this.element.appendChild(container);
};

module.exports = SavingsView;
