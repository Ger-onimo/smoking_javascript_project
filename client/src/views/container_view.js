const PubSub = require('../helpers/pub_sub.js');
const ItemView = require('./item_view.js');
const SmokedView = require('./smoked_view.js');

const ContainerView = function (element) {
  this.element = element;
}

ContainerView.prototype.bindEvents = function() {
  this.createSmokedButton();
  PubSub.subscribe('Cigarettes:data-ready', (evt) => {
    const items = evt.detail;
    this.renderContainer(items);
  });
};

ContainerView.prototype.createSmokedButton = function () {
  const smokeButton = new SmokedView(this.element);
  smokeButton.bindEvents();
};



ContainerView.prototype.renderContainer = function (items) {
  items.forEach((item) => {
    const itemView = new ItemView(this.element, item);
    itemView.render();
  })
};


module.exports = ContainerView;
