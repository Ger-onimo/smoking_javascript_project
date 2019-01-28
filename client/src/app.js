const FormView = require('./views/form_view.js');
const ContainerView = require('./views/container_view.js');
const Cigarettes = require('./models/cigarettes.js');
const RandMotivation = require('./models/smoking_facts.js') //

document.addEventListener('DOMContentLoaded', () => {
  console.log('Javascript Loaded');
  const form = document.querySelector('form#initial-entry-form');
  const formView = new FormView(form);
  const messageElement = document.querySelector('p.message'); //
  formView.bindEvents()

const cigarettes = new Cigarettes();
cigarettes.bindEvents();

const randMotivation = new RandMotivation(); //
const motivation = randMotivation.get();  //
const message = `  ${motivation}.`; //
messageElement.textContent = message; //
})
