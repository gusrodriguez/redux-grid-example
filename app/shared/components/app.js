const React = require('react');
const UserForm = require('./user-form');
const UsersList = require('./users-list');

function App() {
  return (
    <div>
      <UserForm />
      <UsersList />
    </div>
  );
}

module.exports = App;
