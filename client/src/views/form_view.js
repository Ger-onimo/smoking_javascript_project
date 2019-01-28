const PubSub = require('../helpers/pub_sub.js');
const moment = require('moment');

const FormView = function (element) {
  this.element = element;
}

FormView.prototype.bindEvents = function () {
  this.createForm();
  this.loginButton();
  this.element.addEventListener('submit', (event) => {
    this.hideForm();
    const newUser = this.handleFormSubmit(event);
    PubSub.publish('FormView:new-user', newUser);
  })
};

FormView.prototype.createForm = function () {
  const labels = this.createLabels();
  const inputs = this.createInputs();

  for (let i = 0; i < labels.length; i++) {
    this.element.appendChild(labels[i]);
    this.element.appendChild(inputs[i])
  }

  const submitFormButton = document.createElement('button');
  submitFormButton.type = 'submit';
  submitFormButton.innerHTML = 'Start saving your life!';
  this.element.appendChild(submitFormButton);
};

FormView.prototype.handleFormSubmit = function (event) {
  event.preventDefault();
  const timestamp = moment();
  const newClientInfo = {
    brand: event.target.cigBrand.value,
    daily: event.target.cigNumber.value,
    cost: event.target.cost.value,
    timestamp: timestamp
  }
  return newClientInfo;
};

FormView.prototype.createLabels = function () {
  const cigLabel = document.createElement('label');
  cigLabel.for = 'cigBrand';
  cigLabel.innerHTML = 'Brand: ';

  const numLabel = document.createElement('label');
  numLabel.for = 'cigNumber';
  numLabel.innerHTML = 'Number per day: '

  const costLabel = document.createElement('label');
  costLabel.for = 'cost';
  costLabel.innerHTML = 'Price per pack (£): ';

  const labels = [cigLabel, numLabel, costLabel];
  return labels;
};

FormView.prototype.createInputs = function () {
  const cigType = document.createElement('input');
  cigType.id = 'cigBrand';
  cigType.type = 'text';
  cigType.placeholder = 'Enter Brand..'

  const cigNumber = document.createElement('input');
  cigNumber.id = 'cigNumber';
  cigNumber.type = 'number';
  cigNumber.min = 1;

  const cost = document.createElement('input');
  cost.id = 'cost';
  cost.type = 'number';
  cost.min = 1;

  const inputs = [cigType, cigNumber, cost];
  return inputs;
};

FormView.prototype.loginButton = function () {
  const button = document.getElementById('login');
  button.addEventListener('click', (event) => {
    this.hideForm();
  })
};

FormView.prototype.hideForm = function () {
  let form = document.getElementById('initial-entry-form');
  if (form.style.display === 'block') {
    form.style.display = 'none';
  }
  else {
    form.style.display = 'block';
  }
};

module.exports = FormView;
