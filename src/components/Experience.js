import React from 'react';

export default class Experience extends React.Component {
  constructor() {
    super();

    this.state = {
      company: 'Company Name',
      title: 'Job Title',
      duties: 'Job Duties',
      dates: '01/01/2010 - 12/12/2020',
    };
  }

  render() {
    const { mode } = this.props;
    const {
      company, title, duties, dates,
    } = this.state;

    return (
      <div>
        <h2>Experience:</h2>
        <p>
          {mode === 'edit' ? (
            <input type="text" placeholder={company} />
          ) : (
            <span>{company}</span>
          )}
        </p>
        <p>
          {mode === 'edit' ? (
            <input type="text" placeholder={title} />
          ) : (
            <span>{title}</span>
          )}
        </p>
        <p>
          {mode === 'edit' ? (
            <input type="text" placeholder={duties} />
          ) : (
            <span>{duties}</span>
          )}
        </p>
        <p>
          {mode === 'edit' ? (
            <input type="text" placeholder={dates} />
          ) : (
            <span>{dates}</span>
          )}
        </p>
      </div>
    );
  }
}
