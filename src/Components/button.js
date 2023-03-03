/* eslint-disable react/prop-types */
import './button.css';

function Button({ Action }) {
  return (
    <div className="button-container">
      <button className="button" type="button" value="AC" onClick={(e) => Action(e)}>AC</button>
      <button className="button" type="button" value="+/-" onClick={(e) => Action(e)}>+/-</button>
      <button className="button" type="button" value="%" onClick={(e) => Action(e)}>%</button>
      <button className="button" type="button" value="÷" onClick={(e) => Action(e)}>÷</button>
      <button className="button" type="button" value="7" onClick={(e) => Action(e)}>7</button>
      <button className="button" type="button" value="8" onClick={(e) => Action(e)}>8</button>
      <button className="button" type="button" value="9" onClick={(e) => Action(e)}>9</button>
      <button className="button" type="button" value="x" onClick={(e) => Action(e)}>x</button>
      <button className="button" type="button" value="4" onClick={(e) => Action(e)}>4</button>
      <button className="button" type="button" value="5" onClick={(e) => Action(e)}>5</button>
      <button className="button" type="button" value="6" onClick={(e) => Action(e)}>6</button>
      <button className="button" type="button" value="-" onClick={(e) => Action(e)}>-</button>
      <button className="button" type="button" value="1" onClick={(e) => Action(e)}>1</button>
      <button className="button" type="button" value="2" onClick={(e) => Action(e)}>2</button>
      <button className="button" type="button" value="3" onClick={(e) => Action(e)}>3</button>
      <button className="button" type="button" value="+" onClick={(e) => Action(e)}>+</button>
      <button className="button" type="button" value="0" onClick={(e) => Action(e)}>0</button>
      <button className="button" type="button" value="." onClick={(e) => Action(e)}>.</button>
      <button className="button" type="button" value="=" onClick={(e) => Action(e)}>=</button>
    </div>
  );
}

export default Button;
