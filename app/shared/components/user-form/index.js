/* eslint-disable */
const React = require('react');
const PropTypes = require('prop-types');
const { connect } = require('react-redux');
const { bindActionCreators } = require('redux');
const { clear } = require('../../actions');
const { addUser } = require('../../actions');
const { editUser } = require('../../actions');
const { closeMessage } = require('../../actions');
const Message = require('../message');

class UserForm extends React.Component {

  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.closeMessage = this.closeMessage.bind(this);
  }

  // Handle the uncontrolled inputs.
  componentWillReceiveProps(nextProps) {
    if (nextProps.user.firstname !== this.props.user.firstname) {
      this.refs.firstname.value = nextProps.user.firstname;
    }
    if (nextProps.user.surname !== this.props.user.surname) {
      this.refs.surname.value = nextProps.user.surname;
    }
    if (nextProps.user.contact_number !== this.props.user.contact_number) {
      this.refs.contact_number.value = nextProps.user.contact_number;
    }
    if (nextProps.user.email !== this.props.user.email) {
      this.refs.email.value = nextProps.user.email;
    }
  }

  closeMessage() {
    this.props.closeMessage();
  }

  clearForm() {
    this.refs.firstname.value = '';
    this.refs.surname.value = '';
    this.refs.contact_number.value = '';
    this.refs.email.value = '';
  }

  submitForm(e) {
    e.preventDefault();
    const activeUser = {
      firstname: e.target.firstname.value,
      surname: e.target.surname.value,
      contact_number: e.target.contact_number.value,
      email: e.target.email.value,
    };
    if (this.props.editing) {
      this.props.editUser(activeUser);
      
    } else {
      this.props.addUser(activeUser);
    }
     // Clear uncontrolled inputs.
    this.clearForm();
    // Clear redux piece of state.
    this.props.clear();
  }

  render() {
    let editingLabel = null;
    let message = null;
    if (this.props.editing) {
      editingLabel = <span>Editing user {this.props.user.email}. Click <a role="link" className="link" onClick={() => this.props.clear()}>Here to clear and add a new user.</a></span>;
    }
    if (this.props.addedUser) {
      message = <Message type="alert-success"closeMessage={this.closeMessage} text="The new user has been added." />;
    }
    if (this.props.editedUser) {
      message = <Message type="alert-success" closeMessage={this.closeMessage} text="The  user has been edited." />;
    }
    if (this.props.deletedUser) {
      message = <Message type="alert-success" closeMessage={this.closeMessage} text="The  user has been deleted." />;
    }
    if (this.props.validationError) {
      message = <Message type="alert-danger" closeMessage={this.closeMessage} text="Fullname must be unique and email should be valid." />;
    }

    return (
      <form className="container user-form" onSubmit={this.submitForm}>
        <div className="row form-row">
          <div className="col-md-12">
            {editingLabel}
          </div>
        </div>
        <div className="row form-row">
          <div className="col-md-6">
            <input type="text" size="50" maxLength="50" className="form-control" name="firstname" ref="firstname" placeholder="First name" pattern="[a-zA-Z0-9]+" maxlength="50"/>
          </div>
          <div className="col-md-6">
            <input type="text" size="50" maxLength="50" className="form-control" name="surname" ref="surname" placeholder="Surname" pattern="[a-zA-Z0-9]+" maxlength="50"/>
          </div>
        </div>
        <div className="row form-row">
          <div className="col-md-6">
            <input type="text" size="50" maxLength="50" className="form-control" name="contact_number" ref="contact_number" placeholder="Contact Number" pattern="^[0-9+]*$"/>
          </div>
          <div className="col-md-6">
            <input type="email" size="50" maxLength="50" className="form-control" name="email" ref="email" placeholder="Email" disabled={this.props.editing} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
          </div>
        </div>
        <div className="row form-row">
          <div className="col-md-12">
            {message}
            <button type="submit" className="btn btn-primary pull-right">Add</button>
          </div>
        </div>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ clear, addUser, editUser, closeMessage }, dispatch);
}

function mapStateToProps(state) {
  return {
    user: state.selectedUser,
    addedUser: !Array.isArray(state.addedUser) && state.addedUser,
    editedUser: !Array.isArray(state.editedUser) && state.editedUser,
    deletedUser: !Array.isArray(state.deletedUser) && state.deletedUser,
    editing: !((Array.isArray(state.selectedUser) && state.selectedUser.length === 0) || (state.selectedUser && state.selectedUser.email === '')),
    validationError: !Array.isArray(state.validationError) && state.validationError,
  };
}

UserForm.propTypes = {
  text: PropTypes.string.isRequired,
  closeMessage: PropTypes.func.isRequired,
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(UserForm);
