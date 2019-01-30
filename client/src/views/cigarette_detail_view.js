const PubSub = require('../helpers/pub_sub.js');
const moment = require('moment');

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
  list.textContent = this.formatText();

  return list;

};

CigaretteDetailsView.prototype.formatText = function () {
  const text = this.itemData.timestamp;
  return moment(text).format("DD/MM/YYYY - HH:mm:ss");
};

module.exports = CigaretteDetailsView;
