import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState(0);
  const handleClick = (event) => {
    setState((state) => calculate(state, event.target.textContent));
  };

  return (

    <div className="container my-3">

      <div className="calculator card">
        <div className="screen">{state.next || state.total || 0}</div>

        <div className="calculator-keys">
          <button type="button" className="operation all-clear function btn btn-light btn-sm" value="all-clear" onClick={handleClick}>AC</button>
          <button type="button" className="operator btn btn-light" onClick={handleClick} value="+/-">+/-</button>
          <button type="button" className="operator btn btn-light" value="%" onClick={handleClick}>%</button>
          <button type="button" className="devi operator btn btn-info" value="/" onClick={handleClick}>&divide;</button>
          <button type="button" className="operator mult operations btn btn-info" value="x" onClick={handleClick}>x</button>
          <button type="button" className="operator muns operations btn btn-info" value="-" onClick={handleClick}>-</button>
          <button type="button" className="operator add operations btn btn-info" value="+" onClick={handleClick}>+</button>
          <button type="button" className="equal-sign operator btn btn-warning" value="=" onClick={handleClick}>=</button>

          <button type="button" value="7" className="btn btn-light waves-effect" onClick={handleClick}>7</button>
          <button type="button" value="8" className="btn btn-light waves-effect" onClick={handleClick}>8</button>
          <button type="button" value="9" className="btn btn-light waves-effect" onClick={handleClick}>9</button>


          <button type="button" value="4" className="btn btn-light waves-effect" onClick={handleClick}>4</button>
          <button type="button" value="5" className="btn btn-light waves-effect" onClick={handleClick}>5</button>
          <button type="button" value="6" className="btn btn-light waves-effect" onClick={handleClick}>6</button>


          <button type="button" value="1" className="btn btn-light waves-effect" onClick={handleClick}>1</button>
          <button type="button" value="2" className="btn btn-light waves-effect" onClick={handleClick}>2</button>
          <button type="button" value="3" className="btn btn-light waves-effect" onClick={handleClick}>3</button>


          <button type="button" value="0" className="zerocal btn btn-light waves-effect " onClick={handleClick}>0</button>
          <button type="button" className="decimal function btn btn-light" value="." onClick={handleClick}>.</button>
        </div>
      </div>
    </div >

  );

}

export default Calculator;