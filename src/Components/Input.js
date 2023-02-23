/* eslint-disable react/prop-types */
import './Input.css';

const Input = ({ text }) => {
  const { total, next, operation } = text;
  return (
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
};

export default Input;
