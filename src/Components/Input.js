import './Input.css';
import PropTypes from 'prop-types';

const Input = ({ total, next, operation }) => (
  <div className="input">
    <h1>
      {total}
      {' '}
      {operation}
      {' '}
      {next}
    </h1>
  </div>
);

Input.propTypes = {
  total: PropTypes.number.isRequired,
  next: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
};

export default Input;
