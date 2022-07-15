import React from 'react';
export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.toggleSwitch = this.toggleSwitch.bind(this);
    this.state = { isToggled: false };
  }

  toggleSwitch() {
    this.setState({ isToggled: !this.state.isToggled });
  }

  render() {
    let btnClass = '';
    let text = '';
    if (this.state.isToggled === false) {
      btnClass = 'toggle-btn';
      text = 'off';
    } else {
      btnClass = 'toggle-btn active';
      text = 'on';
    }
    return (
      <div className='container'>
        <div onClick={this.toggleSwitch} className={btnClass}>
          <div className='inner-circle'></div>
          <span>{text}</span>
        </div>
      </div>
    );
  }
}
