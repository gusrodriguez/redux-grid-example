const axios = require('axios');
const config = require('../../config');
const {
  FETCH_USERS,
  SELECTED_USER,
  CLEAR,
  ADD_USER,
  EDIT_USER,
  EDITED_USER,
  DELETE_USER,
  DELETED_USER,
  ADDED_USER,
  CLOSE_MESSAGE,
  VALIDATION_ERROR,
  SORT,
} = require('./types');

const fetchUsers = () => async (dispatch) => {
  const res = await axios.get(`${config.apiBaseUrl}/api/users`);
  dispatch({
    type: FETCH_USERS,
    payload: res,
  });
};

// eslint-disable-next-line
const selectedUser = (user) => {
  return {
    type: SELECTED_USER,
    payload: user,
  };
};

// eslint-disable-next-line
const clear = () => {
  return {
    type: CLEAR,
    payload: {
      firstname: '',
      surname: '',
      contact_number: '',
      email: '',
    },
  };
};

const addUser = user => async (dispatch) => {
  try {
    const res = await axios.post(`${config.apiBaseUrl}/api/users`, user, { headers: { 'Content-Type': 'application/json' } });
    dispatch({
      type: ADD_USER,
      payload: res,
    });
    // After adding the user, dispatch another action to display the notification.
    dispatch({
      type: ADDED_USER,
      payload: { addedUser: true },
    });
  } catch (error) {
    if (error.response.status === 400) {
      dispatch({
        type: VALIDATION_ERROR,
        payload: { validationError: true },
      });
    }
  }
};

const editUser = user => async (dispatch) => {
  const res = await axios.put(`${config.apiBaseUrl}/api/users`, user, { headers: { 'Content-Type': 'application/json' } });
  dispatch({
    type: EDIT_USER,
    payload: res,
  });
  dispatch({
    type: EDITED_USER,
    payload: { editedUser: true },
  });
};

const deleteUser = user => async (dispatch) => {
  const res = await axios.delete(`${config.apiBaseUrl}/api/users/${user.email}`);
  dispatch({
    type: DELETE_USER,
    payload: res,
  });
  dispatch({
    type: DELETED_USER,
    payload: { deletedUser: true },
  });
};

// eslint-disable-next-line
const sort = (criteria) => {
  return {
    type: SORT,
    payload: criteria,
  };
};

// eslint-disable-next-line
const closeMessage = () => {
  return {
    type: CLOSE_MESSAGE,
    payload: false,
  };
};

module.exports = {
  fetchUsers,
  selectedUser,
  clear,
  addUser,
  closeMessage,
  editUser,
  deleteUser,
  sort,
};
