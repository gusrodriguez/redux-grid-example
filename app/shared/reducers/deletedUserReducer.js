const { DELETED_USER, CLOSE_MESSAGE } = require('../actions/types');

function deletedUsersReducer(state = [], action) {
  switch (action.type) {
    case DELETED_USER:
      return action.payload;
    case CLOSE_MESSAGE:
      return action.payload;
    default:
      return state;
  }
}

module.exports = deletedUsersReducer;
