const React = require('react');
const PropTypes = require('prop-types');
const UserListItem = require('../user-list-item');
const ReloadButton = require('../reload-button');
const { connect } = require('react-redux');
const { bindActionCreators } = require('redux');
const { fetchUsers } = require('../../actions');
const { sort } = require('../../actions');

class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.sort = this.sort.bind(this);
  }
  componentDidMount() {
    this.props.fetchUsers();
  }
  sort(criteria) {
    this.props.sort(criteria);
  }
  render() {
    return (
      <section className="container users-list">
        <h1>
          Employee Data
          <ReloadButton />
        </h1>
        <div className="row header">
          <div className="col-md-2 sortable" onClick={() => this.sort('firstname')} >
            First Name
          </div>
          <div className="col-md-2 sortable" onClick={() => this.sort('surname')}>
            Surname
          </div>
          <div className="col-md-2 sortable" onClick={() => this.sort('contact_number')}>
            Contact Number
          </div>
          <div className="col-md-2 sortable" onClick={() => this.sort('email')}>
            Email
          </div>
          <div className="col-md-2 sortable col-md-offset-1 icon-delete-header">
            Delete
          </div>
        </div>
        {this.props.users.map(user => <UserListItem key={user.email} user={user} />)}
      </section>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUsers, sort }, dispatch);
}

function mapStateToProps(state) {
  return { users: state.users };
}

UsersList.propTypes = {
  users: PropTypes.object.isRequired,
  fetchUsers: PropTypes.func.isRequired,
  sort: PropTypes.func.isRequired,
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(UsersList);
