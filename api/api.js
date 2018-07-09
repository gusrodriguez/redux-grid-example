const express = require('express');
const bodyParser = require('body-parser');
const configuration = require('./config');

const app = express();

const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/*
 * Allow axios cross domain requests. '*' should be removed for security reasons.
 */
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  next();
});

router.use(require('./routes/users'));

app.use('/api', router);

app.listen(configuration.server.port);
console.log('API listening on port: ' + configuration.server.port);