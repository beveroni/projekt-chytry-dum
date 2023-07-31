import React from 'react';
import './style.css';

export const Header = ({ title }) => {
  return (
    <header className="header">
      <h1 className="header__title">{title}</h1>
    </header>
  );
};
