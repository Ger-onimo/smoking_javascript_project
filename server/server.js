const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
 const createRouter = require("./helpers/create_router.js");
 const MongoClient = require("mongodb").MongoCLient;

 app.use(express.static(path.join(__dirname, '..', 'client', 'public')));
 app.use(bodyParser.json());
