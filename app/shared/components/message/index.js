const React = require('react');
const PropTypes = require('prop-types');

function Message(props) {
  return (
    <div className={`alert ${props.type} alert-dismissible`}>
      <span className="close" data-dismiss="alert" aria-label="close" onClick={props.closeMessage}>&times;</span>
      { props.text }
    </div>
  );
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  closeMessage: PropTypes.func.isRequired,
};

module.exports = Message;
