const RequestHelper = require('../helpers/request_helper.js');
const PubSub =require('../helpers/pub_sub.js');


const Cigarettes = function () {
  this.info = [];
  this.request = new RequestHelper('/api/quitsmoking')
};

Cigarettes.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:new-user', (event) => {
    const newUser = event.detail;
    console.log(event);
    this.add(newUser);
  });
};

Cigarettes.prototype.add = function (newUser) {
  this.request
   .post(newUser)
   .then((userInfo) => {
     this.info = userInfo.filter((obj) => {
       return(obj.brand);
     });
     PubSub.publish('Cigarettes:data-ready', this.info);
   })
   .catch(console.error);

};

Cigarettes.prototype.getData = function () {
  this.request
    .get()
    .then((data) => {
      this.info = data.filter((obj) => {
        return(obj.brand);
      })
      PubSub.publish('Cigarettes:data-ready', this.info);
    })
};

Cigarettes.prototype.getCigaretteData = function () {
  this.request
    .get()
    .then((data) => {
      this.info = data.filter((obj) => {
        return (!obj.brand);
      })
      PubSub.publish('Cigarettes:data-ready', this.info);
    })
};

Cigarettes.prototype.delete = function (deletedItem) {
  const id = deletedItem.id;
  this.request
    .delete(id)
    .then((data) => {
      this.info = data.filter((obj) =>{
        return (!obj.brand);
      })
      PubSub.publish('Cigarettes:data-ready', this.info);
    })
};

Cigarettes.prototype.update = function (updatedItem) {
  const id = updatedItem.id;
  this.request
    .put(updatedItem, id)
    .then((data) => {
      this.info = data.filter((obj) => {
        return (!obj.brand);
      })
      PubSub.publish('Cigarettes:data-ready', this.info);
    })
};

module.exports = Cigarettes;
