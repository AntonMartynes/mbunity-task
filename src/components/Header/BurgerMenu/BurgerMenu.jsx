/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import './BurgerMenu.scss';


export const BurgerMenu = ({ isMenuOpen, closeMenu }) => {
  return (
    <nav className={`burger-menu ${isMenuOpen ? 'burger-menu--open' : ''}`} id="menu">
      <div className="burger-menu__header__container">
        <a href="#" className="burger-menu__logo">Logo Here</a>
        <button type="button" onClick={closeMenu} className="burger-menu__iconLink" aria-label="Close menu"> </button>
      </div>
      <ul className="list">
        <li>
          <a className="list__link" href="/home">Home</a>
        </li>
        <li>
          <a className="list__link" href="/features">Features</a>
        </li>
        <li>
          <a className="list__link" href="/blog">Blog</a>
        </li>
        <li>
          <a className="list__link" href="/shop">Shop</a>
        </li>
        <li>
          <a className="list__link" href="/about">About</a>
        </li>
        <li>
          <a className="list__link" href="/contact">Contact</a>
        </li>
      </ul>
      <div className="burger-menu__footer__container">
        <a href="#" className="burger-menu__circe__link">
          <div className="burger-menu__profile__inner"></div>
        </a>
        <a href="#" className="burger-menu__circe__link">
          <div className="burger-menu__cart__inner"></div>
        </a>
      </div>
    </nav>
  );
};