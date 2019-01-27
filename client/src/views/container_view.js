const PubSub = require('../helpers/pub_sub.js');
const ItemView = require('./item_view.js');
const SmokedView = require('./smoked_view.js');

const ContainerView = function (element) {
  this.element = element;
}

ContainerView.prototype.bindEvents = function() {
  this.createSmokedButton();
  this.createInputData();
  PubSub.subscribe('Cigarettes:data-ready', (evt) => {
    const items = evt.detail;
    this.renderContainer(items);
    debugger
  });
};

ContainerView.prototype.createSmokedButton = function () {
  const smokeButton = new SmokedView(this.element);
  smokeButton.bindEvents();
};

ContainerView.prototype.createInputData = function () {
  const inputData = document.createElement('div');
  inputData.id = 'input-data-container';
  this.element.appendChild(inputData);
};

ContainerView.prototype.renderContainer = function (items) {
  const dataContainer = document.getElementById('input-data-container');
  dataContainer.innerHTML = '';
  items.forEach((item) => {
    const itemView = new ItemView(dataContainer, item);
    itemView.render();
  })
};


module.exports = ContainerView;
