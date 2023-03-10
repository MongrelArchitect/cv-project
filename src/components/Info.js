import React from 'react';

export default class Info extends React.Component {
  constructor() {
    super();

    this.state = {
      name: 'My Name',
      email: 'email@example.com',
      phone: '123-456-7890',
    };
  }

  render() {
    const { mode } = this.props;
    const { name, email, phone } = this.state;

    return (
      <div>
        <h2>Info:</h2>
        <p>
          {mode === 'edit' ? (
            <input type="text" placeholder={name} />
          ) : (
            <span>{name}</span>
          )}
        </p>
        <p>
          {mode === 'edit' ? (
            <input type="email" placeholder={email} />
          ) : (
            <span>{email}</span>
          )}
          {mode === 'edit' ? (
            <input type="tel" placeholder={phone} />
          ) : (
            <span>{phone}</span>
          )}
        </p>
      </div>
    );
  }
}
