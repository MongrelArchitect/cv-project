import React from 'react';

export default class Mode extends React.Component {
  render() {
    return (
      <div>
        <h2>Mode:</h2>
        <button type="button" id="edit">EDIT</button>
        <button type="button" id="display">DISPLAY</button>
      </div>
    );
  }
}
