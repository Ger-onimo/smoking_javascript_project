const RequestHelper = require('../helpers/request_helper.js');
const PubSub =require('../helpers/pub_sub.js');
const moment = require('moment');


const Cigarettes = function () {
  this.info = [];
  this.request = new RequestHelper('/api/quitsmoking')
};

Cigarettes.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:new-user', (event) => {
    const newUser = event.detail;
    this.add(newUser);
  });
  PubSub.subscribe('SmokedView:user-smoked', (event) => {
    const timestamp = event.detail;
    const formattedTS = this.formatTimestamp(timestamp);
    const newSmoke = {
      timestamp: formattedTS
    };
    this.add(newSmoke);
  })
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


Cigarettes.prototype.formatTimestamp = function (timestamp) {
  const formattedTS = timestamp.format("DD/MM/YYYY HH:mm:ss");
  return formattedTS;
};
module.exports = Cigarettes;
