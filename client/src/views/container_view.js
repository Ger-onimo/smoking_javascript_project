const PubSub = require('../helpers/pub_sub.js');
const ItemView = require('./item_view.js');
const SavingsView = require('./savings_view.js')

const ContainerView = function (element) {
  this.element = element;
}

//savings to date

ContainerView.prototype.createSavings = function () {
  const timer = new SavingsView(this.element);
  timer.bindEvents();
};
///

module.exports = ContainerView;
