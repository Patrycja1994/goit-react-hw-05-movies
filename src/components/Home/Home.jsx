import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Home.module.css';

export const Home = () => {
  return (
    <header>
      <div className={css.navContainer}>
        <NavLink to="/" className={css.homePage}>
          Home
        </NavLink>
        <NavLink to="/movies" className={css.homePage}>
          Movie
        </NavLink>
      </div>
      <hr />
    </header>
  );
};
