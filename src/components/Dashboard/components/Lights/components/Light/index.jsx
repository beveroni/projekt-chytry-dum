import React, { useState } from 'react';
import './style.css';
import lightOffImg from './img/light-off.svg';
import lightOnImg from './img/light-on.svg';

export const Light = ({ name, state }) => {
  const [lightState, setLightState] = useState(state);
  return (
    <div
      className="light"
      onClick={() => {
        lightState === 'on' ? setLightState('off') : setLightState('on');
      }}
    >
      <div className="light__icon">
        <img src={lightState === 'on' ? lightOnImg : lightOffImg} />
      </div>
      <div className="light__name">{name}</div>
    </div>
  );
};
