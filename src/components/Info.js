import React from 'react';
import style from './Info.module.css';

export default class Info extends React.Component {
  constructor() {
    super();

    this.state = {
      name: 'My Name',
      email: 'email@example.com',
      phone: '123-456-7890',
    };

    this.changeName = this.changeName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePhone = this.changePhone.bind(this);
  }

  changeName(event) {
    this.setState({
      name: event.target.value,
    });
  }

  changeEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }

  changePhone(event) {
    this.setState({
      phone: event.target.value,
    });
  }

  render() {
    const { mode } = this.props;
    const { name, email, phone } = this.state;

    return (
      <div>
        {mode === 'edit' ? (<h2>Info:</h2>) : null}
        <p>
          {mode === 'edit' ? (
            <label htmlFor="name">
              Name:
              <input
                type="text"
                id="name"
                value={name}
                onChange={this.changeName}
              />
            </label>
          ) : (
            <span className={style.name}>{name}</span>
          )}
        </p>
        <p className={mode === 'display' ? `${style.contact}` : null}>
          {mode === 'edit' ? (
            <label htmlFor="email">
              Email:
              <input
                id="email"
                type="email"
                value={email}
                onChange={this.changeEmail}
              />
            </label>
          ) : (
            <span>{email}</span>
          )}
          {mode === 'edit' ? (
            <label htmlFor="phone">
              Phone:
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={this.changePhone}
              />
            </label>
          ) : (
            <span>{phone}</span>
          )}
        </p>
      </div>
    );
  }
}
