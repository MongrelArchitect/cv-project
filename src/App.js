import React from 'react';
import Mode from './components/Mode';
import Info from './components/Info';
import Education from './components/Education';
import Experience from './components/Experience';
import './reset.module.css';
import style from './App.module.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      mode: 'edit',
    };

    this.changeMode = this.changeMode.bind(this);
  }

  changeMode() {
    const { mode } = this.state;
    if (mode === 'edit') {
      this.setState({
        mode: 'display',
      });
    } else {
      this.setState({
        mode: 'edit',
      });
    }
  }

  render() {
    const { mode } = this.state;

    return (
      <div
        className={
          mode === 'edit'
            ? `${style.container} ${style.edit}`
            : `${style.container} ${style.display}`
        }
      >
        <Mode mode={mode} changeMode={this.changeMode} />
        <Info mode={mode} />
        <Education mode={mode} />
        <Experience mode={mode} />
      </div>
    );
  }
}

export default App;
