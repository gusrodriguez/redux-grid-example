const { EDITED_USER, CLOSE_MESSAGE } = require('../actions/types');

function editedUsersReducer(state = [], action) {
  switch (action.type) {
    case EDITED_USER:
      return action.payload;
    case CLOSE_MESSAGE:
      return action.payload;
    default:
      return state;
  }
}

module.exports = editedUsersReducer;
