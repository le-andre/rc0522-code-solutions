import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { counter: 0 };
  }

  handleClick() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    let btnClass = '';
    const counter = this.state.counter;
    if (counter >= 3 && counter < 6) {
      btnClass = 'button-one';
    } else if (counter >= 6 && counter < 9) {
      btnClass = 'button-two';
    } else if (counter >= 9 && counter < 12) {
      btnClass = 'button-three';
    } else if (counter >= 12 && counter < 15) {
      btnClass = 'button-four';
    } else if (counter >= 15 && counter < 18) {
      btnClass = 'button-five';
    } else if (counter >= 18) {
      btnClass = 'button-six';
    }
    return <button onClick={this.handleClick} className={btnClass}>Click!</button>;
  }
}
