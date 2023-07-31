import React from 'react';
import './style.css';
import { Light } from './components/Light';

export const Lights = ({ lights }) => {
  return (
    <div className="lights">
      {lights.map(({ name, state }) => {
        return <Light name={name} state={state} key={name} />;
      })}
    </div>
  );
};
