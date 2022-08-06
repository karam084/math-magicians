import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState((state) => calculate(state, event.target.textContent));
  }

  render() {
    const { next, total } = this.state;

    return (
      <div className="container my-3">

        <div className="calculator card">
          <div className="screen">{next || total || 0}</div>

          <div className="calculator-keys">
            <button type="button" className="operation all-clear function btn btn-light btn-sm" value="all-clear" onClick={this.handleClick}>AC</button>
            <button type="button" className="operator btn btn-light" onClick={this.handleClick} value="+/-">+/-</button>
            <button type="button" className="operator btn btn-light" value="%" onClick={this.handleClick}>%</button>
            <button type="button" className="devi operator btn btn-info" value="/" onClick={this.handleClick}>&divide;</button>
            <button type="button" className="operator mult operations btn btn-info" value="x" onClick={this.handleClick}>x</button>
            <button type="button" className="operator muns operations btn btn-info" value="-" onClick={this.handleClick}>-</button>
            <button type="button" className="operator add operations btn btn-info" value="+" onClick={this.handleClick}>+</button>
            <button type="button" className="equal-sign operator btn btn-warning" value="=" onClick={this.handleClick}>=</button>

            <button type="button" value="7" className="btn btn-light waves-effect" onClick={this.handleClick}>7</button>
            <button type="button" value="8" className="btn btn-light waves-effect" onClick={this.handleClick}>8</button>
            <button type="button" value="9" className="btn btn-light waves-effect" onClick={this.handleClick}>9</button>


            <button type="button" value="4" className="btn btn-light waves-effect" onClick={this.handleClick}>4</button>
            <button type="button" value="5" className="btn btn-light waves-effect" onClick={this.handleClick}>5</button>
            <button type="button" value="6" className="btn btn-light waves-effect" onClick={this.handleClick}>6</button>


            <button type="button" value="1" className="btn btn-light waves-effect" onClick={this.handleClick}>1</button>
            <button type="button" value="2" className="btn btn-light waves-effect" onClick={this.handleClick}>2</button>
            <button type="button" value="3" className="btn btn-light waves-effect" onClick={this.handleClick}>3</button>


            <button type="button" value="0" className="zerocal btn btn-light waves-effect " onClick={this.handleClick}>0</button>
            <button type="button" className="decimal function btn btn-light" value="." onClick={this.handleClick}>.</button>
          </div>
        </div>
      </div >

    );

  }
}
export default Calculator;