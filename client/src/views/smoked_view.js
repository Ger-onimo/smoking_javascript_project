const PubSub = require('../helpers/pub_sub.js');
const moment = require('moment');

const SmokedView = function (element) {
  this.element = element;
}

SmokedView.prototype.bindEvents = function () {
  const button = this.createSmokeButton();
  button.addEventListener('click', (event) => {
    const timestamp = moment();
    PubSub.publish('SmokedView:user-smoked', timestamp);
  })
};

SmokedView.prototype.createSmokeButton = function () {
  const container = document.createElement('div');
  container.id = 'smoke-button-container';
  const smokeButton = document.createElement('button');
  smokeButton.classList.add('smoked-button');
  smokeButton.textContent = "I smoked";
  container.appendChild(smokeButton);
  this.element.appendChild(container);
  return smokeButton
};

module.exports = SmokedView;
