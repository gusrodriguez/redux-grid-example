const { SELECTED_USER } = require('../actions/types');
const { CLEAR } = require('../actions/types');

function selectedUsersReducer(state = [], action) {
  switch (action.type) {
    case SELECTED_USER:
      return action.payload;
    case CLEAR:
      return action.payload;
    default:
      return state;
  }
}

module.exports = selectedUsersReducer;
