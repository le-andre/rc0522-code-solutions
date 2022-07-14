import React from 'react';
let counter = 0;
export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isClicked: counter };
  }

  handleClick() {
    this.setState({ isClicked: counter++ });
  }

  render() {
    if (counter < 3) {
      return <button onClick={this.handleClick}>Click!</button>;
    }
    if (counter >= 3 && counter < 6) {
      return <button onClick={this.handleClick} className="button-one">Click!</button>;
    }
    if (counter >= 6 && counter < 9) {
      return <button onClick={this.handleClick} className="button-two">Click!</button>;
    }
    if (counter >= 9 && counter < 12) {
      return <button onClick={this.handleClick} className="button-three">Click!</button>;
    }
    if (counter >= 12 && counter < 15) {
      return <button onClick={this.handleClick} className="button-four">Click!</button>;
    }
    if (counter >= 15 && counter < 18) {
      return <button onClick={this.handleClick} className="button-five">Click!</button>;
    }
    if (counter >= 18) {
      return <button onClick={this.handleClick} className="button-six">Click!</button>;
    }
  }
}
