const PubSub = require('../helpers/pub_sub.js');

const CigaretteDetailsView = function (element, itemData) {
  this.element = element;
  this.itemData = itemData;
}

CigaretteDetailsView.prototype.render = function () {

  const element = document.createElement('ul');
  element.classList.add('cigarette-data-container');

  const listItems = this.createListElement();
  element.appendChild(listItems);

  this.element.appendChild(element);

};

CigaretteDetailsView.prototype.createListElement = function () {
  const list = document.createElement('li');
  list.classList.add('cigarette-detail');
  list.textContent = this.itemData.timestamp;
  return list;

};

module.exports = CigaretteDetailsView;
