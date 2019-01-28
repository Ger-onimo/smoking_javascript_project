const PubSub = require('../helpers/pub_sub.js');

const MotivationView = function (element) {
  this.element = element
};

MotivationView.prototype.bindEvents = function () {

  PubSub.subscribe('FormView:new-user', (event) => {
this.createMotivContainer();
  });



};

MotivationView.prototype.createMotivContainer = function () {
  const container = document.createElement('div');
  container.id = 'motive-container';
  const motive = document.createElement('p');
  motive.classList.add('motive-text');
  motive.textContent = "this is random motive";
  container.appendChild(motive);
  this.element.appendChild(container);
};

const randMotivation = new RandMotivation();
const motivation = randMotivation.get();
const message = `  ${motivation}.`;
messageElement.textContent = message;

module.exports = MotivationView;
