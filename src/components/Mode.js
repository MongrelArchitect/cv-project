import React from 'react';

export default class Mode extends React.Component {
  render() {
    const { mode } = this.props;
    const { changeMode } = this.props;

    return (
      <div>
        <h2>Mode:</h2>
        <button type="button" id="edit" disabled={mode === 'edit'}>
          EDIT
        </button>
        <button type="button" id="display" disabled={mode !== 'edit'}>
          DISPLAY
        </button>
      </div>
    );
  }
}
