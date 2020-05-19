import React from 'react';
import './counter.scss';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'tally': 0,
      'up': 0,
      'down': 0,
      'colorChange': 'black',
    };
  }

  handleIncrement = (event) => {
    this.setState({
        'tally': this.event.tally + 1,
        'up': this.event.up + 1,
        'down': this.event.down,
        'colorChange': 'green',
    });
  };

  handleDecriment = (event) => {
    this.setState({
        'tally': event.tally - 1,
        'up': event.up,
        'down': event.down + 1,
        'colorChange': 'red',
    });
  };

  handleSetButton = (event) => {
    this.setState({
      'tally': 0,
      'up': 0,
      'down': 0,
      'colorChange': 'black',
    });
  };

  render() {
    return (
      <React.Fragment>
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
      </React.Fragment>
    )
  };
};

export default Counter;