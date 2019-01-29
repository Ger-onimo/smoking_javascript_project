const PubSub = require('../helpers/pub_sub.js');

const CigaretteDetailsView = function (element, itemData) {
  this.element = element;
  this.itemData = itemData;
}

CigaretteDetailsView.prototype.render = function () {

  const element = document.createElement('ul');
  element.classList.add('cigarette-data-container');

  const listItems = this.createListElement();
  element.appendChild(listItems);

  this.element.appendChild(element);
this.lapseButton();
};

CigaretteDetailsView.prototype.createListElement = function () {
  const list = document.createElement('li');
  list.classList.add('cigarette-detail');
  list.textContent = this.itemData.timestamp;
  return list;
};

CigaretteDetailsView.prototype.lapseButton = function () {
  const button = document.getElementById('lapse-button');
  button.addEventListener('click', (event) => {
    this.hide();
  })
};

CigaretteDetailsView.prototype.hide = function () {
  let form = document.getElementById('cigarette-data-container');
  if (form.style.display === 'block') {
    form.style.display = 'none';
  }
  else {
    form.style.display = 'block';
  }
};

module.exports = CigaretteDetailsView;
