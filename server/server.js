const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const createRouter = require("./helpers/create_router.js");
const MongoClient = require("mongodb").MongoClient;

app.use(express.static(path.join(__dirname, '..', 'client', 'public')));
app.use(bodyParser.json());


MongoClient.connect("mongodb://localhost:27017")
.then((client) => {
  const db = client.db("quitsmoking");
  const cigaretteCollection = db.collection("cigarettes");
  const cigaretteRouter = createRouter(cigaretteCollection);
  app.use("/api/quitsmoking", cigaretteRouter)
})
.catch(console.error);

app.listen(3000, function () {
  console.log(`Listening on port ${this.address().port}`);
})
