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
  list.textContent = this.formatTime();
  return list;

};


CigaretteDetailsView.prototype.formatTime = function () {
  const time = this.itemData.timestamp;
  const formattedTime = moment(time).format("DD/MM/YYYY - HH:mm:ss")
  return formattedTime
};
module.exports = CigaretteDetailsView;
