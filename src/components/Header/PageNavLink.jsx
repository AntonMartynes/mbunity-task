import React, { memo, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';


export const PageNavLink = memo(({ to, text, setIsOpen }) => {
  return (
    <NavLink
      onClick={() => setIsOpen(false)}
      to={to}
      className={({ isActive }) => cn('link__item', {
        'link__item--is-active': isActive,
      })}
    >
      {text}
    </NavLink>
  );
});