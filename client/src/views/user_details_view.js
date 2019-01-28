const PubSub = require('../helpers/pub_sub.js');

const UserDetailsView = function (element, itemData) {
  this.element = element;
  this.itemData = itemData;
}

UserDetailsView.prototype.render = function () {
  // console.log(this.element);

  const element = document.createElement('ul');
  element.classList.add('smoking-data-container');

  const listItems = this.createListElement();
  element.appendChild(listItems);

  const detailList = this.createDetailList();
  listItems.appendChild(detailList)

  const cigaretteBrand = this.createBrandElement();
  detailList.appendChild(cigaretteBrand);

  const cigaretteDailyIntake = this.createDailyElement();
  detailList.appendChild(cigaretteDailyIntake);

  const cigaretteCostPerPack = this.createCostElement();
  detailList.appendChild(cigaretteCostPerPack);

  this.element.appendChild(element);

};

UserDetailsView.prototype.createListElement = function () {
  const list = document.createElement('li');
  list.classList.add('smoker-detail-list');
  return list;
};

UserDetailsView.prototype.createDetailList = function () {
  const detailList = document.createElement('ul');
  return detailList;
};

UserDetailsView.prototype.createBrandElement = function () {
  const brand = document.createElement('li');
  brand.textContent = `Brand: ${this.itemData.brand}`;
  return brand;
};

UserDetailsView.prototype.createDailyElement = function () {
  const daily = document.createElement('li');
  daily.textContent = `Daily: ${this.itemData.daily}`;
  return daily;
};

UserDetailsView.prototype.createCostElement = function () {
  const cost = document.createElement('li');
  cost.textContent = `Cost: ${this.itemData.cost}`;
  return cost;
};

module.exports = UserDetailsView;
