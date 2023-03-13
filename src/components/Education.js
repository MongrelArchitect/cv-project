import React from 'react';
import style from './Education.module.css';

export default class Education extends React.Component {
  constructor() {
    super();

    this.state = {
      education: [
        {
          degree: 'BA - Music',
          school: 'Desi Arnaz University',
          dates: '2005 - 2009',
          info: 'Graduated with honors',
        },
      ],
    };

    this.changeDegree = this.changeDegree.bind(this);
    this.changeSchool = this.changeSchool.bind(this);
    this.changeDates = this.changeDates.bind(this);
    this.changeInfo = this.changeInfo.bind(this);
    this.delete = this.delete.bind(this);
    this.addEdu = this.addEdu.bind(this);
  }

  getEduCopy() {
    const { education } = this.state;
    const tempEdu = [];
    education.forEach((edu) => {
      const eduCopy = {};
      Object.keys(edu).forEach((key) => {
        eduCopy[key] = edu[key];
      });
      tempEdu.push(eduCopy);
    });
    return tempEdu;
  }

  changeDegree(event) {
    const { index } = event.target.dataset;
    const tempEdu = this.getEduCopy();
    tempEdu[index].degree = event.target.value;
    this.setState({
      education: tempEdu,
    });
  }

  changeSchool(event) {
    const { index } = event.target.dataset;
    const tempEdu = this.getEduCopy();
    tempEdu[index].school = event.target.value;
    this.setState({
      education: tempEdu,
    });
  }

  changeDates(event) {
    const { index } = event.target.dataset;
    const tempEdu = this.getEduCopy();
    tempEdu[index].dates = event.target.value;
    this.setState({
      education: tempEdu,
    });
  }

  changeInfo(event) {
    const { index } = event.target.dataset;
    const tempEdu = this.getEduCopy();
    tempEdu[index].info = event.target.value;
    this.setState({
      education: tempEdu,
    });
  }

  delete(event) {
    const tempEdu = this.getEduCopy();
    const { index } = event.target.dataset;
    this.setState({
      education: tempEdu.filter((edu) => tempEdu.indexOf(edu) !== +index),
    });
  }

  addEdu() {
    const tempEdu = this.getEduCopy();
    tempEdu.unshift({
      degree: '',
      school: '',
      dates: '',
      info: '',
    });
    this.setState({
      education: tempEdu,
    });
  }

  render() {
    const { mode } = this.props;
    const { education } = this.state;

    return (
      <div>
        <h2>Education:</h2>
        {mode === 'edit' ? (
          <div>
            <button type="button" onClick={this.addEdu}>
              {' '}
              +
              {' '}
            </button>
            <hr />
          </div>
        ) : null}
        {education.map((edu) => {
          const key = education.indexOf(edu);
          if (mode === 'edit') {
            return (
              <div key={key}>
                <h3>
                  <label htmlFor="degree">
                    Degree:
                    <input
                      id="degree"
                      type="text"
                      value={edu.degree}
                      data-index={education.indexOf(edu)}
                      onChange={this.changeDegree}
                    />
                  </label>
                </h3>
                <p>
                  <label htmlFor="school">
                    School:
                    <input
                      id="school"
                      type="text"
                      value={edu.school}
                      data-index={education.indexOf(edu)}
                      onChange={this.changeSchool}
                    />
                  </label>
                </p>
                <p>
                  <label htmlFor="dates">
                    Dates Attended:
                    <input
                      id="dates"
                      type="text"
                      value={edu.dates}
                      data-index={education.indexOf(edu)}
                      onChange={this.changeDates}
                    />
                  </label>
                </p>
                <p>
                  <label htmlFor="detail">
                    Detail:
                    <textarea
                      id="detail"
                      value={edu.info}
                      data-index={education.indexOf(edu)}
                      onChange={this.changeInfo}
                    />
                  </label>
                </p>
                <br />
                <button
                  type="button"
                  data-index={education.indexOf(edu)}
                  onClick={this.delete}
                >
                  DELETE
                </button>
                <hr />
              </div>
            );
          }

          return (
            <div key={key} className={style.education}>
              <h3>{edu.degree}</h3>
              <p>{edu.school}</p>
              <p>{edu.dates}</p>
              <p>{edu.info}</p>
              <hr />
            </div>
          );
        })}
      </div>
    );
  }
}
