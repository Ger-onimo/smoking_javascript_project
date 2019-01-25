const PubSub = require('../helpers/pub_sub.js');

const ItemView = function (element, item) {
  this.element = element;
  this.item = item;
}

ItemView.prototype.render = function (userData) {
  const smokingContainer = document.createElement('div');
  smokingContainer.classList.add('smoking-container');

  const smokingDataList = document.createElement('ul');
  smokingDataList.classList.add('data-list');

  this.element.appendChild(smokingContainer);
};

module.exports = ItemView;
