const PubSub = require('../helpers/pub_sub.js');

const FormView = function (element) {
  this.element = element;
}

FormView.prototype.bindEvents = function () {
  this.createForm();
  this.element.addEventListener('submit', (event) => {
    evt.preventDefault();
    console.log(event);
  })
};

FormView.prototype.createForm = function () {
  const cigLabel = document.createElement('label');
  cigLabel.for = 'cigBrand';
  cigLabel.innerHTML = 'Brand:'
  const cigType = document.createElement('input');
  cigType.id = 'cigBrand';
  cigType.type = 'text';
  cigType.placeholder = 'Enter Brand..'
  this.element.appendChild(cigLabel);
  this.element.appendChild(cigType);

  const numLabel = document.createElement('label');
  numLabel.for = 'cigNumber';
  numLabel.innerHTML = 'Number per day:'
  const cigNumber = document.createElement('input');
  cigNumber.id = 'cigNumber';
  cigNumber.type = 'number';
  this.element.appendChild(numLabel);
  this.element.appendChild(cigNumber);

  const costLabel = document.createElement('label');


};



module.exports = FormView;
