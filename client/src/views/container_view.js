const PubSub = require('../helpers/pub_sub.js');
const ItemView = require('./item_view.js');

const ContainerView = function (element) {
  this.element = element;
}

module.exports = ContainerView;
