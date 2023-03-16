import React, { useState } from 'react';
import Mode from './components/Mode';
import Info from './components/Info';
import Education from './components/Education';
import Experience from './components/Experience';
import './reset.module.css';
import style from './App.module.css';

export default function App() {
  const [mode, setMode] = useState('edit');

  const changeMode = () => {
    if (mode === 'edit') {
      setMode('display');
    } else {
      setMode('edit');
    }
  };

  return (
    <div
      className={
        mode === 'edit'
          ? `${style.container} ${style.edit}`
          : `${style.container} ${style.display}`
      }
    >
      <Mode mode={mode} changeMode={changeMode} />
      <Info mode={mode} />
      <Education mode={mode} />
      <Experience mode={mode} />
    </div>
  );
}
