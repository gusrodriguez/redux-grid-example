const { combineReducers } = require('redux');
const usersReducer = require('./usersReducer');
const selectedUserReducer = require('./selectedUserReducer');
const addedUserReducer = require('./addedUserReducer');
const editedUserReducer = require('./editedUserReducer');
const deletedUserReducer = require('./deletedUserReducer');
const validationErrorReducer = require('./validationErrorReducer');

module.exports = combineReducers({
  users: usersReducer,
  selectedUser: selectedUserReducer,
  addedUser: addedUserReducer,
  editedUser: editedUserReducer,
  deletedUser: deletedUserReducer,
  validationError: validationErrorReducer,
});
