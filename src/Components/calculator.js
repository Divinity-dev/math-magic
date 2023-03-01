import './calculator.css';
import { useState } from 'react';
import Button from './button';
import Input from './Input';
import calculate from './logic/calculate';

function Calculator() {
  const [text, setText] = useState({ total: 0, next: '', operation: '' });
  const { total, next, operation } = text;
  const onClickHandler = (event) => {
    const newText = calculate(text, event.target.value);
    setText(newText);
  };
  return (
    <div className="cal-class">
      <h2>Lets do some maths</h2>
      <div className="calc-container">
        <Input
          total={total}
          next={next}
          operation={operation}
        />
        <Button Action={onClickHandler} />
      </div>
    </div>
  );
}

export default Calculator;
