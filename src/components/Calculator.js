import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends Component {
  render() {
    return (
      <div class="container my-3">

        <div class="calculator card">

          <input type="text" class="calculator-screen z-depth-1" value="0" disabled />

          <div class="calculator-keys">
            <button type="button" class="all-clear function btn btn-danger btn-sm" value="all-clear">AC</button>
            <button type="button" class="operator btn btn-info" value="+/-">+/-</button>
            <button type="button" class="operator btn btn-info" value="%">%</button>
            <button type="button" class="operator btn btn-info" value="/">&divide;</button>
            <button type="button" class="operator btn btn-info" value="*">&times;</button>
            <button type="button" class="operator btn btn-info" value="-">-</button>
            <button type="button" class="operator btn btn-info" value="+">+</button>
            <button type="button" class="equal-sign operator btn btn-warning" value="=">=</button>

            <button type="button" value="7" class="btn btn-light waves-effect">7</button>
            <button type="button" value="8" class="btn btn-light waves-effect">8</button>
            <button type="button" value="9" class="btn btn-light waves-effect">9</button>


            <button type="button" value="4" class="btn btn-light waves-effect">4</button>
            <button type="button" value="5" class="btn btn-light waves-effect">5</button>
            <button type="button" value="6" class="btn btn-light waves-effect">6</button>


            <button type="button" value="1" class="btn btn-light waves-effect">1</button>
            <button type="button" value="2" class="btn btn-light waves-effect">2</button>
            <button type="button" value="3" class="btn btn-light waves-effect">3</button>


            <button type="button" value="0" class="zerocal btn btn-light waves-effect ">0</button>
            <button type="button" class="decimal function btn btn-secondary" value=".">.</button>

          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;