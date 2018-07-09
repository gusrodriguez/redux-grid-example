const React = require('react');
const PropTypes = require('prop-types');
const { connect } = require('react-redux');
const { bindActionCreators } = require('redux');
const { fetchUsers } = require('../../actions');

class ReloadButton extends React.Component {
  constructor(props) {
    super(props);
    this.reload = this.reload.bind(this);
  }
  reload() {
    this.props.fetchUsers();
  }
  render() {
    // TODO: ugly positioning of the close button. Should be implemented via css.
    const align = {
      marginLeft: '8px',
      marginBottom: '-4px',
    };
    return (
      <svg onClick={this.reload} className="reload "xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={align}><path d="M9 12l-4.463 4.969-4.537-4.969h3c0-4.97 4.03-9 9-9 2.395 0 4.565.942 6.179 2.468l-2.004 2.231c-1.081-1.05-2.553-1.699-4.175-1.699-3.309 0-6 2.691-6 6h3zm10.463-4.969l-4.463 4.969h3c0 3.309-2.691 6-6 6-1.623 0-3.094-.65-4.175-1.699l-2.004 2.231c1.613 1.526 3.784 2.468 6.179 2.468 4.97 0 9-4.03 9-9h3l-4.537-4.969z" /></svg>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUsers }, dispatch);
}

function mapStateToProps(state) {
  return { users: state.users };
}

ReloadButton.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(ReloadButton);

