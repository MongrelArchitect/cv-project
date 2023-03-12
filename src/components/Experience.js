import React from 'react';

export default class Experience extends React.Component {
  constructor() {
    super();

    this.state = {
      experience: [
        {
          company: 'Company Name',
          title: 'Job Title',
          duties: 'Job Duties',
          dates: '01/01/2010 - 12/12/2020',
        },
        {
          company: 'Another Company',
          title: 'Job Title',
          dates: '02/03/2021 - 11/11/2022',
          duties: 'Some Dutues',
        },
      ],
    };

    this.getExpCopy = this.getExpCopy.bind(this);
    this.changeCompany = this.changeCompany.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
    this.changeDates = this.changeDates.bind(this);
    this.changeDuties = this.changeDuties.bind(this);
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

  render() {
    const { mode } = this.props;
    const { experience } = this.state;

    return (
      <div>
        <h2>Experience:</h2>
        {experience.map((exp) => {
          const key = experience.indexOf(exp);
          if (mode === 'edit') {
            return (
              <div key={key}>
                <h3>
                  <input
                    type="text"
                    value={exp.company}
                    data-index={experience.indexOf(exp)}
                    onChange={this.changeCompany}
                  />
                </h3>
                <p>
                  <input
                    type="text"
                    value={exp.title}
                    data-index={experience.indexOf(exp)}
                    onChange={this.changeTitle}
                  />
                </p>
                <p>
                  <input
                    type="text"
                    value={exp.dates}
                    data-index={experience.indexOf(exp)}
                    onChange={this.changeDates}
                  />
                </p>
                <p>
                  <textarea
                    value={exp.duties}
                    data-index={experience.indexOf(exp)}
                    onChange={this.changeDuties}
                  />
                </p>
                <hr />
              </div>
            );
          }

          return (
            <div key={key}>
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
