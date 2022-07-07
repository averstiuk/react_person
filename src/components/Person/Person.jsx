import React from 'react';
import './Person.scss';

export const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => (
  <section className="Person">
    <h2 className="Person__name">{`My name is ${name}`}</h2>
    <p className="Person__age">{`I am ${age}`}</p>
    {isMarried ? (
      <p className="Person__partner">{sex === 'm' ? `My wife's name is ${partnerName}` : `My husband's name is ${partnerName}`}</p>
    ) : (
      <p className="Person__partner">I am not married</p>
    )}
  </section>
);
