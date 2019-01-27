const RequestHelper = require('../helpers/request_helper.js');
const PubSub =require('../helpers/pub_sub.js');
const moment = require('moment');


const Cigarettes = function () {
  this.info = [];
  this.request = new RequestHelper('/api/quitsmoking')
};

Cigarettes.prototype.bindEvents = function () {
  this.getCigaretteData();
  this.getData();

  PubSub.subscribe('FormView:new-user', (event) => {
    const newUser = event.detail;
    this.add(newUser);
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
      this.timestampPlay(data);
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
        return (!obj.brand);
      })
      PubSub.publish('Cigarettes:data-ready', this.info);
    })
};

Cigarettes.prototype.timestampPlay = function (data) {
  console.log(data);
  const now = moment();
  const before = moment(data[12].timestamp);
  const diff = moment.duration(now.diff(before));
  console.log(diff.asMilliseconds());
};

module.exports = Cigarettes;
