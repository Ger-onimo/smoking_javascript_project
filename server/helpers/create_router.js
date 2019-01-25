const express  =  require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function (collection) {
  const router = express.Router()

  router.get('/', (req, res) => {
    collection
    .find()
    .toArray()
    .then((docs) => res.json(docs))
    .catch((err) => {
      console.error(err);
    });
  });


  router.get("/:id", (req, res) => {
    const id = req.params.id;
    collection
    .findOne({_id: ObjectID(id)})
    .then((docs) => res.json(docs))
    .catch((err) => {
      console.error(err);
    });
  });

  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    collection
    .deleteOne({ _id: ObjectID(id) })
    .then(() => {
      collection
      .find()
      .toArray()
      .then((docs) => res.json(docs));
    })
    .catch((err) => {
      console.error(err);
    });
  });

  router.post('/', (req, res) => {
    const newData = req.body;
    collection
    .insertOne(newData)
    .then((result) => {
      collection
      .find()
      .toArray()
      .then((docs) => res.json(docs));
    })
    .catch((err) => {
      console.error(err);

    });
  });

  return router;
}



module.exports = createRouter;
