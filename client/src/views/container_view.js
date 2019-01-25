const PubSub = require('../helpers/pub_sub.js');
const ItemView = require('./item_view.js');

const ContainerView = function (element) {
  this.element = element;
}

ContainerView.prototype.eventListener = function() {
  this.element.addEventListener('submit', function(evt) {
    evt.preventDefault();
  });
  PubSub.subscribe('Cigarettes:data-ready', (evt) => {
    const items = evt.detail;
    // console.log(evt.detail);
    // this.renderList(items);
  });
};

module.exports = ContainerView;
