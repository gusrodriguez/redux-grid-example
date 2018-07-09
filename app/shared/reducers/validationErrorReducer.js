const { VALIDATION_ERROR } = require('../actions/types');

function validationErrorReducer(state = [], action) {
  switch (action.type) {
    case VALIDATION_ERROR:
      return action.payload;
    default:
      return state;
  }
}

module.exports = validationErrorReducer;
