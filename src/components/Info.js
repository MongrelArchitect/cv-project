import React, { useState } from 'react';
import style from './Info.module.css';

export default function Info({ mode }) {
  const [name, setName] = useState('My Name');
  const [email, setEmail] = useState('email@example.com');
  const [phone, setPhone] = useState('123-456-7890');

  const changeName = (event) => {
    setName(event.target.value);
  };

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  const changePhone = (event) => {
    setPhone(event.target.value);
  };

  return (
    <div>
      {mode === 'edit' ? <h2>Info:</h2> : null}
      <p>
        {mode === 'edit' ? (
          <label htmlFor="name">
            Name:
            <input
              type="text"
              id="name"
              value={name}
              onChange={changeName}
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
              onChange={changeEmail}
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
              onChange={changePhone}
            />
          </label>
        ) : (
          <span>{phone}</span>
        )}
      </p>
    </div>
  );
}
