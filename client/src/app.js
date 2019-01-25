const FormView = require('./views/form_view.js');
const ContainerView = require('./views/container_view.js');
const Cigarettes = require('./models/cigarettes.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('Javascript Loaded');
  const form = document.querySelector('form#initial-entry-form');
  const formView = new FormView(form);
  formView.bindEvents()

  const cigarettes = new Cigarettes();
  cigarettes.bindEvents();
  cigarettes.getData();

})
