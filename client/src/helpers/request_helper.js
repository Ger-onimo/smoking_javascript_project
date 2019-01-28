const RequestHelper = function (url) {
  this.url = url;
}

RequestHelper.prototype.get = function () {
  return fetch(this.url)
    .then((response) => response.json());
};

RequestHelper.prototype.post = function (item) {
  return fetch(this.url, {
    method: 'POST',
    body: JSON.stringify(item),
    headers: { 'Content-Type': 'application/json' }
  })
    .then((response) => response.json());
};

RequestHelper.prototype.delete = function (itemID) {
  return fetch(`${this.url}/${itemID}`, {
    method: 'DELETE'
  })
    .then((response) => response.json());
};

RequestHelper.prototype.put = function (payload, itemID) {
  return fetch(`${this.url}/${itemID}`, {
    method: 'PUT',
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'application/json'}
  })
    .then((response) => response.json());
}

module.exports = RequestHelper;
