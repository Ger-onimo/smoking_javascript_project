const PubSub = require('../helpers/pub_sub.js');
const UserDetailsView = require('./user_details_view.js');
const SmokedView = require('./smoked_view.js');
const CigaretteDetailsView = require('./cigarette_detail_view.js');
const TimerView = require('./timer_view.js'); /////timer
const SavingsView = require('./savings_view.js') ///savings
const MotivationView = require('./motivation_view.js')

const ContainerView = function (element) {
  this.element = element;
}

ContainerView.prototype.bindEvents = function() {
  this.setupPage();

  PubSub.subscribe('Cigarettes:user-data-ready', (evt) => {
    const items = evt.detail;
    this.renderInputData(items);
  });
  PubSub.subscribe('Cigarettes:update-ready', (event) => {
    const items = event.detail;
    this.renderInputData(items)
  })
  PubSub.subscribe('Cigarettes:cigarette-data-ready', (evt) =>{
    const items = evt.detail;
    this.renderCigaretteData(items)
  });
};

ContainerView.prototype.setupPage = function () {
  this.createSmokedButton();
  this.lapseButton();
  this.userDataButton();
  this.createMotivation();
  this.createTimer();
  this.createSavings();
  this.createInputData();
  this.createCigaretteData();
};

ContainerView.prototype.createSavings = function () {
  const saving = new SavingsView(this.element);
  saving.bindEvents();
};

ContainerView.prototype.createTimer = function () {
  const timer = new TimerView(this.element);
  timer.bindEvents();
};

ContainerView.prototype.createMotivation = function () {
  const motivation = new MotivationView(this.element);
  motivation.bindEvents();
};

ContainerView.prototype.createSmokedButton = function () {
  const smokeButton = new SmokedView(this.element);
  smokeButton.bindEvents();
};

ContainerView.prototype.createInputData = function () {
  const inputData = document.createElement('div');
  inputData.id = 'input-data-container';
  this.element.appendChild(inputData);
};

ContainerView.prototype.renderInputData = function (items) {
  const dataContainer = document.getElementById('input-data-container');
  dataContainer.innerHTML = '';
  items.forEach((item) => {
    const userDetailsView = new UserDetailsView(dataContainer, item);
    userDetailsView.render();
  })
};

ContainerView.prototype.createCigaretteData = function () {
  const cigaretteData = document.createElement('div');
  cigaretteData.id = 'cigarette-data-container';
  this.element.appendChild(cigaretteData);
};

ContainerView.prototype.renderCigaretteData = function (items) {
  const dataContainer = document.getElementById('cigarette-data-container');
  dataContainer.innerHTML = '';
  items.forEach((item) => {
    const cigaretteDetailView = new CigaretteDetailsView(dataContainer, item);
    cigaretteDetailView.render();
  })
};

ContainerView.prototype.lapseButton = function () {
  const button = document.getElementById('lapse-button');
  button.addEventListener('click', (event) => {
    this.hideCigaretteData();
  })
};

ContainerView.prototype.hideCigaretteData = function () {
  let form = document.getElementById('cigarette-data-container');
  if (form.style.display === 'block') {
    form.style.display = 'none';
  }
  else {
    form.style.display = 'block';
  }
};


ContainerView.prototype.userDataButton = function () {
  const button = document.getElementById('userData-button');
  button.addEventListener('click', (event) => {
    this.hideUserData();
  })
};

ContainerView.prototype.hideUserData = function () {
  let form = document.getElementById('input-data-container');
  if (form.style.display === 'block') {
    form.style.display = 'none';
  }
  else {
    form.style.display = 'block';
  }
};

module.exports = ContainerView;
