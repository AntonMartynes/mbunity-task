/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo, useState } from 'react';
import './Header.scss';
import logo from './imgForHeader/logo.svg';
import cn from 'classnames';
import menuOpen from './imgForHeader/menu_button-open.svg';
import menuClose from './imgForHeader/menu_button-close.svg';
import { Link } from 'react-router-dom';

const navLinkInfo = [
  { to: '#', text: 'Home' },
  { to: '#', text: 'Features' },
  { to: '#', text: 'Blog' },
  { to: '#', text: 'Shop' },
  { to: '#', text: 'About' },
  { to: '#', text: 'Contact' },
];

export const Header = memo(() => {
  const [isOpenMenu, setIsOpen] = useState(false);
  return (
    <header className='header'>
      <div className="nav">
        <div className="nav__link">
          <a href="/" className="nav__link--logo">
            <img src={logo} alt="logo" />
          </a>

          <div
            className="nav__link--menu nav__link--menu-open"
            onClick={() => setIsOpen(!isOpenMenu)}
            aria-hidden="true"
          >
            <img src={isOpenMenu ? menuClose : menuOpen} alt="menu-open" />
          </div>
        </div>
      </div>

      <nav className={(cn('navigation', { navigation__mobile: !isOpenMenu }))}>
      <ul className="navigation__list">
          {navLinkInfo.map(el => (
            <li key={el.text} className="navigation__item">
              <a href="#" setIsOpen={setIsOpen}>
                {el.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
});