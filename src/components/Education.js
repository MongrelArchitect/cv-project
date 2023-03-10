import React from 'react';

export default class Education extends React.Component {
  constructor() {
    super();

    this.state = {
      degree: 'Degree Title',
      school: 'School Name',
      dates: '2005 - 2009',
      info: 'Additional information',
    };
  }

  render() {
    const { mode } = this.props;
    const {
      degree, school, dates, info,
    } = this.state;

    return (
      <div>
        <h2>Education:</h2>
        <p>
          {mode === 'edit' ? (
            <input type="text" placeholder={degree} />
          ) : (
            <span>{degree}</span>
          )}
        </p>
        <p>
          {mode === 'edit' ? (
            <input type="text" placeholder={school} />
          ) : (
            <span>{school}</span>
          )}
        </p>
        <p>
          {mode === 'edit' ? (
            <input type="text" placeholder={dates} />
          ) : (
            <span>{dates}</span>
          )}
        </p>
        <p>
          {mode === 'edit' ? (
            <input type="text" placeholder={info} />
          ) : (
            <span>{info}</span>
          )}
        </p>
      </div>
    );
  }
}
