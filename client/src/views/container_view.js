const PubSub = require('../helpers/pub_sub.js');
const UserDetailsView = require('./user_details_view.js');
const SmokedView = require('./smoked_view.js');

const ContainerView = function (element) {
  this.element = element;
}

ContainerView.prototype.bindEvents = function() {
  this.createSmokedButton();
  this.createInputData();
  PubSub.subscribe('Cigarettes:data-ready', (evt) => {
    const items = evt.detail;
    this.renderInputData(items);
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

ContainerView.prototype.renderInputData = function (items) {
  const dataContainer = document.getElementById('input-data-container');
  dataContainer.innerHTML = '';
  items.forEach((item) => {
    const userDetailsView = new UserDetailsView(dataContainer, item);
    userDetailsView.render();
  })
};


module.exports = ContainerView;
