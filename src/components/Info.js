import React from 'react';

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
        <h2>Info:</h2>
        <p>
          {mode === 'edit' ? (
            <input type="text" value={name} onChange={this.changeName} />
          ) : (
            <span>{name}</span>
          )}
        </p>
        <p>
          {mode === 'edit' ? (
            <input type="email" value={email} onChange={this.changeEmail} />
          ) : (
            <span>{email}</span>
          )}
          {mode === 'edit' ? (
            <input type="tel" value={phone} onChange={this.changePhone} />
          ) : (
            <span>{phone}</span>
          )}
        </p>
      </div>
    );
  }
}
