const PubSub = require('../helpers/pub_sub.js');

const SmokedView = function (element) {
  this.element = element;
}

SmokedView.prototype.bindEvents = function () {
  this.createSmokeButton();
  this.element.addEventListener('click', (event) => {
    console.log(event);
    // PubSub.publish('FormView:new-user', newUser);
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
};

module.exports = SmokedView;
