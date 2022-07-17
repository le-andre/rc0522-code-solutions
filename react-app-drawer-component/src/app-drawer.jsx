import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { active: true };
  }

  handleChange() {
    this.setState({ active: !this.state.active });
  }

  render() {

    let modalClass = '';
    let burgerButton = '';
    let modalBg = '';
    if (this.state.active === false) {
      modalClass = 'hidden';
      burgerButton = 'fa-solid fa-burger';
      modalBg = 'hidden';
    } else {
      modalClass = 'modal-content';
      burgerButton = 'hidden';
      modalBg = 'modal-bg';
    }
    return (
      <div className="container">
        <icon className={burgerButton} onClick={this.handleChange}></icon>
        <div className={modalClass}>
          <div className={modalBg} onClick={this.handleChange}/>
          <h2>Menu</h2>
          <h3 onClick={this.handleChange}>About</h3>
          <h3 onClick={this.handleChange}>Get Started</h3>
          <h3 onClick={this.handleChange}>Sign In</h3>
        </div>
      </div>
    );
  }
}
