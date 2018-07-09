const express = require('express');
const users = require('../users.json');
const helper = require('../helpers/user-helper');
const dataManager = require('../dataManager');

const router = express.Router();

router.get('/users', (req, res) => {
  res.json(users);
});

router.post('/users', (req, res) => {
  let response = null;
  if (helper.validateAdd(req.body, users)) {
    users.push(req.body);
    dataManager.persist(users);
    response = req.body;
  } else {
    res.status(400);
  }
  res.json(response);
});

router.put('/users', (req, res) => {
  let response = null;
  if (helper.validateEdit(req.body, users)) {
    const updatedUser = users.filter(u => u.email.toLowerCase() === req.body.email.toLowerCase());
    updatedUser[0].firstname = req.body.firstname;
    updatedUser[0].surname = req.body.surname;
    updatedUser[0].contact_number = req.body.contact_number;
    dataManager.persist(users);
    response = req.body;
  } else {
    res.status(400);
  }
  res.json(response);
});

router.delete('/users/:email', (req, res) => {
  const usersRemoveIndex = users.findIndex(u => u.email.toLowerCase() !== req.params.email.toLowerCase());
  const response = users.splice(usersRemoveIndex, 1);
  dataManager.persist(users);
  res.json(response);
});


module.exports = router;
