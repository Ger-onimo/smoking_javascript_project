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

};

ItemView.prototype.createListElement = function () {
  const list = document.createElement('ul');
  list.classList.add('smoker-detail-list');
  return list;
};

module.exports = ItemView;
