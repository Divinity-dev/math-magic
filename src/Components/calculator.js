import './calculator.css';
import Button from './button';
import Input from './Input';

function Calculator() {
  return (
    <div className="calc-container">
      <Input />
      <Button />
    </div>
  );
}

export default Calculator;
