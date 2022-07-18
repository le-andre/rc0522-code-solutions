import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { password: '', status: false, error: 0 };
  }

  handlePasswordChange(event) {
    this.setState({ status: false, error: 0 });
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    if (this.state.password.length < 8) {
      this.setState({ status: false, error: 1 });
    }
    if (this.state.password.length === 0) {
      this.setState({ status: false, error: 2 });
    }
    if (this.state.password.length >= 8) {
      this.setState({ status: true, error: 0 });
    }
    event.preventDefault();
  }

  render() {
    let errorClass = '';
    let errorMessage = '';
    let iconClass = '';
    if (this.state.status === false && this.state.error === 1) {
      errorMessage = 'Your password is too short.';
      iconClass = 'fa-solid fa-xmark';
      errorClass = 'error';
    }
    if (this.state.status === false && this.state.error === 2) {
      errorMessage = 'A password is required.';
      iconClass = 'fa-solid fa-xmark';
      errorClass = 'error';
    }
    if (this.state.status === true && this.state.error === 0) {
      iconClass = 'fa-solid fa-check';
      errorClass = 'hidden';
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Password:
          <input type="password" value={this.state.password} onChange={this.handlePasswordChange} onSubmit={this.handleSubmit} />
          <input type="submit" className='hidden'/>
        </label>

        <span className={errorClass}>{errorMessage}</span>
        <i className={iconClass}></i>

      </form>
    );
  }
}
