import React from 'react';
import './counter.scss';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tally: 0,
      up: 0,
      down: 0,
      colorChange: 'black',
    };
  }

  handleIncrement = (event) => {
    this.setState({
        tally: this.state.tally + 1,
        up: this.state.up + 1,
        down: this.state.down,
        colorChange: 'green',
    });
  };

  handleDecriment = (event) => {
    this.setState({
        tally: this.state.tally - 1,
        up: this.state.up,
        down: this.state.down + 1,
        colorChange: 'red',
    });
  };

  handleSetButton = (event) => {
    this.setState({
      tally: 0,
      up: 0,
      down: 0,
      colorChange: 'black',
    });
  };

  render() {
    return (
      <div>
        <button id="currentTally" className={this.state.colorChange} onClick={this.handleSetButton}></button>
        <div id="counterWrap">
          <div>Up: {this.state.up}</div>
          <div>Down: {this.state.down}</div>
        </div>
        <div id="buttonWrap">
          <button id="upButton" onClick={this.handleIncrement}>Up</button>
          <button id="downButton" onClick={this.handleDecriment}>Down</button>
        </div>
      </div>
    )
  };
};

export default Counter;