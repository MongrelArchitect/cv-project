import React from 'react';
import style from './Experience.module.css';

export default class Experience extends React.Component {
  constructor() {
    super();

    this.state = {
      experience: [
        {
          company: 'Company, Inc.',
          title: 'Head of Job Department',
          dates: '01/01/2010 - 12/12/2020',
          duties: 'Handled all job related duties',
        },
      ],
    };

    this.getExpCopy = this.getExpCopy.bind(this);
    this.changeCompany = this.changeCompany.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
    this.changeDates = this.changeDates.bind(this);
    this.changeDuties = this.changeDuties.bind(this);
    this.delete = this.delete.bind(this);
    this.addExp = this.addExp.bind(this);
  }

  getExpCopy() {
    const { experience } = this.state;
    const tempExp = [];
    experience.forEach((exp) => {
      const expCopy = {};
      Object.keys(exp).forEach((key) => {
        expCopy[key] = exp[key];
      });
      tempExp.push(expCopy);
    });
    return tempExp;
  }

  changeCompany(event) {
    const { index } = event.target.dataset;
    const tempExp = this.getExpCopy();
    tempExp[index].company = event.target.value;
    this.setState({
      experience: tempExp,
    });
  }

  changeTitle(event) {
    const { index } = event.target.dataset;
    const tempExp = this.getExpCopy();
    tempExp[index].title = event.target.value;
    this.setState({
      experience: tempExp,
    });
  }

  changeDates(event) {
    const { index } = event.target.dataset;
    const tempExp = this.getExpCopy();
    tempExp[index].dates = event.target.value;
    this.setState({
      experience: tempExp,
    });
  }

  changeDuties(event) {
    const { index } = event.target.dataset;
    const tempExp = this.getExpCopy();
    tempExp[index].duties = event.target.value;
    this.setState({
      experience: tempExp,
    });
  }

  delete(event) {
    const tempExp = this.getExpCopy();
    const { index } = event.target.dataset;
    this.setState({
      experience: tempExp.filter((exp) => tempExp.indexOf(exp) !== +index),
    });
  }

  addExp() {
    const tempExp = this.getExpCopy();
    tempExp.unshift({
      company: '',
      title: '',
      dates: '',
      duties: '',
    });
    this.setState({
      experience: tempExp,
    });
  }

  render() {
    const { mode } = this.props;
    const { experience } = this.state;

    return (
      <div>
        <h2>Experience:</h2>
        {mode === 'edit' ? (
          <div>
            <button type="button" onClick={this.addExp}>
              {' '}
              +
              {' '}
            </button>
            <hr />
          </div>
        ) : null}
        {experience.map((exp) => {
          const key = experience.indexOf(exp);
          if (mode === 'edit') {
            return (
              <div key={key}>
                <h3>
                  <label htmlFor="company">
                    Company:
                    <input
                      id="comapny"
                      type="text"
                      value={exp.company}
                      data-index={experience.indexOf(exp)}
                      onChange={this.changeCompany}
                    />
                  </label>
                </h3>
                <p>
                  <label htmlFor="title">
                    Title:
                    <input
                      id="title"
                      type="text"
                      value={exp.title}
                      data-index={experience.indexOf(exp)}
                      onChange={this.changeTitle}
                    />
                  </label>
                </p>
                <p>
                  <label htmlFor="dates">
                    Dates Employed:
                    <input
                      id="dates"
                      type="text"
                      value={exp.dates}
                      data-index={experience.indexOf(exp)}
                      onChange={this.changeDates}
                    />
                  </label>
                </p>
                <p>
                  <label htmlFor="duties">
                    Duties:
                    <textarea
                      id="duties"
                      value={exp.duties}
                      data-index={experience.indexOf(exp)}
                      onChange={this.changeDuties}
                    />
                  </label>
                </p>
                <br />
                <button
                  type="button"
                  data-index={experience.indexOf(exp)}
                  onClick={this.delete}
                >
                  DELETE
                </button>
                <hr />
              </div>
            );
          }

          return (
            <div key={key} className={style.experience}>
              <h3>{exp.company}</h3>
              <p>{exp.title}</p>
              <p>{exp.dates}</p>
              <p>{exp.duties}</p>
              <hr />
            </div>
          );
        })}
      </div>
    );
  }
}
