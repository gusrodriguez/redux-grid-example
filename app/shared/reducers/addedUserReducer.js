const { ADDED_USER, CLOSE_MESSAGE } = require('../actions/types');

function addedUsersReducer(state = [], action) {
  switch (action.type) {
    case ADDED_USER:
      return action.payload;
    case CLOSE_MESSAGE:
      return action.payload;
    default:
      return state;
  }
}

module.exports = addedUsersReducer;
