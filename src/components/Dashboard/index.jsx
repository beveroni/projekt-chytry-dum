import React from 'react';
import './style.css';
import { Lights } from './components/Lights';
import { Climate } from './components/Climate';
import { Blinds } from './components/Blinds';
import { Energy } from './components/Energy';

export const Dashboard = ({ data }) => {
  return (
    <main className="dashboard">
      <Lights lights={data.lights} />
      <Climate
        temperature={data.climate.temperature}
        humidity={data.climate.humidity}
      />
      <Blinds state={data.blinds} />
      <Energy
        electricity={data.energyConsumption.electricity}
        water={data.energyConsumption.water}
      />
    </main>
  );
};
