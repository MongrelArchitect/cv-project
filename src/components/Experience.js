import React, { useState } from 'react';
import style from './Experience.module.css';

export default function Experience({ mode }) {
  const [experience, setExperience] = useState([
    {
      company: 'Company, Inc.',
      title: 'Head of Job Department',
      dates: '01/01/2010 - 12/12/2020',
      duties: 'Handled all job related duties',
    },
  ]);

  const getExpCopy = () => {
    const tempExp = [];
    experience.forEach((exp) => {
      const expCopy = {};
      Object.keys(exp).forEach((key) => {
        expCopy[key] = exp[key];
      });
      tempExp.push(expCopy);
    });
    return tempExp;
  };

  const changeCompany = (event) => {
    const { index } = event.target.dataset;
    const tempExp = getExpCopy();
    tempExp[index].company = event.target.value;
    setExperience(tempExp);
  };

  const changeTitle = (event) => {
    const { index } = event.target.dataset;
    const tempExp = getExpCopy();
    tempExp[index].title = event.target.value;
    setExperience(tempExp);
  };

  const changeDates = (event) => {
    const { index } = event.target.dataset;
    const tempExp = getExpCopy();
    tempExp[index].dates = event.target.value;
    setExperience(tempExp);
  };

  const changeDuties = (event) => {
    const { index } = event.target.dataset;
    const tempExp = getExpCopy();
    tempExp[index].duties = event.target.value;
    setExperience(tempExp);
  };

  const deleteExp = (event) => {
    const tempExp = getExpCopy();
    const { index } = event.target.dataset;
    setExperience(tempExp.filter((exp) => tempExp.indexOf(exp) !== +index));
  };

  const addExp = () => {
    const tempExp = getExpCopy();
    tempExp.unshift({
      company: '',
      title: '',
      dates: '',
      duties: '',
    });
    setExperience(tempExp);
  };

  return (
    <div>
      <h2>Experience:</h2>
      {mode === 'edit' ? (
        <div>
          <button type="button" onClick={addExp}>
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
                    onChange={changeCompany}
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
                    onChange={changeTitle}
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
                    onChange={changeDates}
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
                    onChange={changeDuties}
                  />
                </label>
              </p>
              <br />
              <button
                type="button"
                data-index={experience.indexOf(exp)}
                onClick={deleteExp}
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
