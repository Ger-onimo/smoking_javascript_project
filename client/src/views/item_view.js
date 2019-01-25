const PubSub = require('../helpers/pub_sub.js');

const ItemView = function (element, itemData) {
  this.element = element;
  this.itemData = itemData;
}

ItemView.prototype.render = function () {
  // console.log(this.element);

  const element = document.createElement('div');
  element.classList.add('smoking-data-container');

  const detailList = this.createListElement();
  element.appendChild(detailList);

  const cigaretteBrand = this.createBrandElement();
  detailList.appendChild(cigaretteBrand);

  this.element.appendChild(element);

};

ItemView.prototype.createListElement = function () {
  const list = document.createElement('ul');
  list.classList.add('smoker-detail-list');
  return list;
};

ItemView.prototype.createBrandElement = function () {
  const brand = document.createElement('li');
  brand.textContent = `Brand: ${this.itemData.brand}`;
  return brand;
};

module.exports = ItemView;
