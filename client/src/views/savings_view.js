const PubSub require('../helpers/pub_sub.js');

const SavingsView = function (element) {
  this.element = element;
// TODO: make a new savings object from the saving model
};

SavingsView.prototype.bindEvents = function () {
  const timer = new SavingsFunction();

  PubSub.subscribe('FormView:new-user', (event) => {
      this.createSaving();
  })
};

SavingsView.prototype.createSaving = function () {
  const container = document.createElement('div');
  container.id = 'savings-container';
  const timer = document.createElement('saving');
  timer.classList.add('saving-acummulator');
  timer.textContent = `` ;
  container.appendChild(savings);
  // this.element.appendChild(container);
};
// render method for view
//in render call savings model.dailySavingCalculator
//render to element

module.exports = SavingsView;
