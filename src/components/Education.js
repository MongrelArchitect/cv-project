import React, { useState } from 'react';
import style from './Education.module.css';

export default function Education({ mode }) {
  const [education, setEducation] = useState([
    {
      degree: 'BA - Music',
      school: 'Desi Arnaz University',
      dates: '2005 - 2009',
      info: 'Graduated with honors',
    },
  ]);

  const getEduCopy = () => {
    const tempEdu = [];
    education.forEach((edu) => {
      const eduCopy = {};
      Object.keys(edu).forEach((key) => {
        eduCopy[key] = edu[key];
      });
      tempEdu.push(eduCopy);
    });
    return tempEdu;
  };

  const changeDegree = (event) => {
    const { index } = event.target.dataset;
    const tempEdu = getEduCopy();
    tempEdu[index].degree = event.target.value;
    setEducation(tempEdu);
  };

  const changeSchool = (event) => {
    const { index } = event.target.dataset;
    const tempEdu = getEduCopy();
    tempEdu[index].school = event.target.value;
    setEducation(tempEdu);
  };

  const changeDates = (event) => {
    const { index } = event.target.dataset;
    const tempEdu = getEduCopy();
    tempEdu[index].dates = event.target.value;
    setEducation(tempEdu);
  };

  const changeInfo = (event) => {
    const { index } = event.target.dataset;
    const tempEdu = getEduCopy();
    tempEdu[index].info = event.target.value;
    setEducation(tempEdu);
  };

  const deleteEdu = (event) => {
    const tempEdu = getEduCopy();
    const { index } = event.target.dataset;
    setEducation(tempEdu.filter((edu) => tempEdu.indexOf(edu) !== +index));
  };

  const addEdu = () => {
    const tempEdu = getEduCopy();
    tempEdu.unshift({
      degree: '',
      school: '',
      dates: '',
      info: '',
    });
    setEducation(tempEdu);
  };

  return (
    <div>
      <h2>Education:</h2>
      {mode === 'edit' ? (
        <div>
          <button type="button" onClick={addEdu}>
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
                    onChange={changeDegree}
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
                    onChange={changeSchool}
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
                    onChange={changeDates}
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
                    onChange={changeInfo}
                  />
                </label>
              </p>
              <br />
              <button
                type="button"
                data-index={education.indexOf(edu)}
                onClick={deleteEdu}
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
