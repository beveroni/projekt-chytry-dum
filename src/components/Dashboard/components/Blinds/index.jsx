import React, { useState } from 'react';
import './style.css';
import blindsOpenImg from './img/blinds-open.svg';
import blindsClosedImg from './img/blinds-closed.svg';

export const Blinds = ({ state }) => {
  const [open, setOpen] = useState(state);
  console.log(open);
  return (
    <div className="blinds">
      <div className="blinds__icon">
        <img src={open === 'open' ? blindsOpenImg : blindsClosedImg} />
      </div>
      <div className="blinds__name">Žaluzie</div>
      <div className="blinds__controls">
        <button
          className={open === 'open' ? 'button button--active' : 'button'}
          onClick={() => {
            setOpen('open');
          }}
        >
          Otevřeno
        </button>
        <button
          className={open !== 'open' ? 'button button--active' : 'button'}
          onClick={() => {
            setOpen('closed');
          }}
        >
          Zavřeno
        </button>
      </div>
    </div>
  );
};
