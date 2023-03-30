/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import * as React from 'react';
import './ContactForm.scss';

export const ContactForm = () => {
  return (
    <div className="ContactForm">
      <div>
        <h2 className="ContactForm__heading">Contact Information</h2>
        <p className="ContactForm__text">
          Say something to start a live chat!
        </p>
      </div>
      <ul className="ContactForm__list">
        <li className="ContactForm__list__item">
          <a
            href="#"
            className="
            ContactForm__icon__link 
            ContactForm__icon__link--phone
          "
          ></a>
          <a href="#" className="ContactForm__link">+1012 3456 789</a>
        </li>
        <li className="ContactForm__list__item">
          <a
            href="#"
            className="
            ContactForm__icon__link 
            ContactForm__icon__link--mail
          "
          ></a>
          <a href="#" className="ContactForm__link">demo@gmail.com</a>
        </li>
        <li className="ContactForm__list__item">
          <a
            href="#"
            className="
            ContactForm__icon__link 
            ContactForm__icon__link--geo"
          ></a>
          <a href="#" className="ContactForm__link">
            132 Dartmouth Street Boston,
            <br />
            Massachusetts 02156 United States
          </a>
        </li>
      </ul>
      <div className="ContactForm__icons__container">
        <a href="#" className="ContactForm__icon">
          <div className="ContactForm__icon--twitter" />
        </a>
        <a href="#" className="ContactForm__icon">
          <div className="ContactForm__icon--instagram" />
        </a>
        <a href="#" className="ContactForm__icon">
          <div className="ContactForm__icon--discord" />
        </a>
      </div>
    </div>
  )
}