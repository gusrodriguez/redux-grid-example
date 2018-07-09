const {
  FETCH_USERS,
  ADD_USER,
  EDIT_USER,
  DELETE_USER,
  SORT,
} = require('../actions/types');

function usersReducer(state = [], action) {
  // Clone the state in order to always return a fresh copy.
  const cloneState = () => state.map(user => Object.assign({}, user));

  switch (action.type) {
    case FETCH_USERS:
      return action.payload.data;
    case ADD_USER:
      return [
        ...state,
        action.payload.data,
      ];
    case EDIT_USER:
      const clonedUpdatedState = cloneState();
      const indexUpdated = clonedUpdatedState.findIndex((user => user.email === action.payload.data.email));
      clonedUpdatedState[indexUpdated].firstname = action.payload.data.firstname;
      clonedUpdatedState[indexUpdated].surname = action.payload.data.surname;
      clonedUpdatedState[indexUpdated].contact_number = action.payload.data.contact_number;
      return clonedUpdatedState;
    case DELETE_USER:
      const clonedDeletedState = cloneState();
      const indexDeleted = clonedDeletedState.findIndex((user => user.email === action.payload.data.email));
      clonedDeletedState.splice(indexDeleted, 1);
      return clonedDeletedState;
    case SORT:
      const clonedSortedState = cloneState();
      clonedSortedState.sort((a, b) => a[action.payload] > b[action.payload]);
      return clonedSortedState;
    default:
      return state;
  }
}

module.exports = usersReducer;
