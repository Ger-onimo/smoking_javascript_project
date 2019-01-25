const RequestHelper = require('../helpers/request_helper.js');
const PubSub =require('../helpers/pub_sub.js');


const Cigarettes = function () {

};

Cigarettes.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:new-user', (event) => {
    const newUser = event.detail;
    console.log(event);
    this.add(newUser);
  });

};


module.exports = Cigarettes;
