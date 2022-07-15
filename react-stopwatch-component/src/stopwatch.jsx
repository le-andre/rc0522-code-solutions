import React from 'react';

export default class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.timeTick = this.timeTick.bind(this);
    this.toggleSwitch = this.toggleSwitch.bind(this);
    this.timeReset = this.timeReset.bind(this);
    this.state = {
      running: false,
      counter: 0
    };
  }

  toggleSwitch() {
    if (this.state.running) {
      clearInterval(this.intervalId);
      this.setState({ running: false });
    } else {
      this.intervalId = setInterval(this.timeTick, 1000);
      this.setState({ running: true });
    }
  }

  timeTick() {
    if (this.state.running === true) {
      this.setState({ counter: this.state.counter + 1 });
    }
  }

  timeReset() {
    if (this.state.running === false) {
      this.setState({ running: false, counter: 0 });
    }
  }

  render() {
    let clockIcon = '';
    if (this.state.running === false) {
      clockIcon = 'fa-regular fa-circle-play';
    }
    if (this.state.running === true) {
      clockIcon = 'fa-regular fa-circle-pause';
    }
    return (
    <div className='container'>
      <div onClick={this.timeReset} className='clock'>
          <i className="fa-regular fa-circle"></i>
      </div>
        <div className='button'>
          <i onClick={this.toggleSwitch} className={clockIcon}></i>
        </div>
      <span>{this.state.counter}</span>
    </div>
    );
  }
}
