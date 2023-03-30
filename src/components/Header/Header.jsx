/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Header.scss';


export const Header = ({ openMenu }) => {
  return (
    <header>
      <div className="header__container">
        <a href="#" className="header__logo">Logo Here</a>
        <button type="button" onClick={openMenu} className="header__iconLink" aria-label="Menu"></button>
        <nav className="header__nav">
          <ul className="header__nav-ul">
            <li className="header__list__item">
              <a href="#" className="header__link">Home</a>
            </li>
            <li className="header__list__item">
              <a href="#" className="header__link">Features</a>
            </li>
            <li className="header__list__item">
              <a href="#" className="header__link">Blog</a>
            </li>
            <li className="header__list__item">
              <a href="#" className="header__link">Shop</a>
            </li>
            <li className="header__list__item">
              <a href="#" className="header__link">About</a>
            </li>
            <li className="header__list__item">
              <a href="#" className="header__link">Contact</a>
            </li>
          </ul>
          <div className="header__icon__links__container">
            <a href="#" className="header__icon__link__container">
              <div className="header__icon__link header__icon__link--profile"></div>
            </a>
            <a href="#" className="header__icon__link__container">
              <div className="header__icon__link header__icon__link--cart"></div>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};