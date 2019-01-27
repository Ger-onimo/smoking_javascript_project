const PubSub = require('../helpers/pub_sub.js');
const ItemView = require('./item_view.js');
const SmokedView = require('./smoked_view.js');
const TimerView = require('./timer_view.js'); /////timer

const ContainerView = function (element) {
  this.element = element;
}

ContainerView.prototype.bindEvents = function() {
  this.createSmokedButton();
  this.createTimer();  //timer
  PubSub.subscribe('Cigarettes:data-ready', (evt) => {
    const items = evt.detail;
    this.renderContainer(items);
  });
};


ContainerView.prototype.createSmokedButton = function () {
  const smokeButton = new SmokedView(this.element);
  smokeButton.bindEvents();
};

////////timer

ContainerView.prototype.createTimer = function () {
  const timer = new TimerView(this.element);
  timer.bindEvents();
};

//////

ContainerView.prototype.renderContainer = function (items) {
  items.forEach((item) => {
    const itemView = new ItemView(this.element, item);
    itemView.render();
  })
};


module.exports = ContainerView;
