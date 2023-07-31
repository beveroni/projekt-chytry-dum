import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import smartHomeData from './smartHomeData';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';

const App = () => {
  return (
    <div className="container">
      <Header title="Chytrý dům" />
      <Dashboard data={smartHomeData} />
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
