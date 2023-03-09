import React from 'react';
import Mode from './components/Mode';
import Info from './components/Info';
import Education from './components/Education';
import Experience from './components/Experience';

class App extends React.Component {
  render() {
    return (
      <div>
        <Mode />
        <Info />
        <Education />
        <Experience />
      </div>
    );
  }
}

export default App;
