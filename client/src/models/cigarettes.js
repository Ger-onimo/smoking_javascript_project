const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');
const TimeStampCalculations = require('../helpers/timestamp_calculations.js')
const moment = require('moment');


const Cigarettes = function () {
  this.info = [];
  this.request = new RequestHelper('/api/quitsmoking');
  this.timestamp = new TimeStampCalculations();
};

Cigarettes.prototype.bindEvents = function () {
  this.getCigaretteData();
  this.getData();

  PubSub.subscribe('FormView:new-user', (event) => {
    const user = event.detail;
    if (!user.id) {
      return this.add(user);
    }
    else{
      debugger
      return this.update(user);
    }
  });
  PubSub.subscribe('SmokedView:user-smoked', (event) => {
    const timestamp = event.detail;
    const newSmoke = {
      timestamp: timestamp
    };
    this.add(newSmoke);
    this.getCigaretteData();
  })
};

Cigarettes.prototype.add = function (newUser) {
  this.request
   .post(newUser)
   .then((userInfo) => {
     this.info = userInfo.filter((obj) => {
       return(obj.brand);
     });
     PubSub.publish('Cigarettes:user-data-ready', this.info);
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
      PubSub.publish('Cigarettes:user-data-ready', this.info);
    })
};

Cigarettes.prototype.getCigaretteData = function () {
  this.request
    .get()
    .then((data) => {
      this.info = data.filter((obj) => {
        return (!obj.brand);
      })

      PubSub.publish('Cigarettes:cigarette-data-ready', this.info);
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
        return (obj.brand);
      })
      PubSub.publish('Cigarettes:update-ready', this.info);
    })
};



module.exports = Cigarettes;
