/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { memo } from "react";
import { BiAbacus } from "react-icons/bi";
import './Footer.scss';

export const Footer = memo(() => {
  return (
      <footer className="footer">
        <div className="footer__logo__container">Logo Here</div>

        <div className="footer__content">
          <div className="footer__content__reachUs">
          <h2 className="footer__group__heading">Reach us</h2>
          <ul className="reachUs__list">
            <div className="footer__sv">
              <li className="footer__icon">
                <a href="tel:+1012 3456 789" className="footer__icon footer__icon-phone"></a>
              </li>
              <li>
                <a href="tel:+1012 3456 789" className="footer__link">+1012 3456 789</a>
              </li>
            </div>

            <div className="footer__sv">
              <li className="footer__icon">
                <a href="mailto:demo@gmail.com" className="footer__icon footer__icon-mail"></a>
              </li>
              <li>
                <a href="mailto:demo@gmail.com" className="footer__link">demo@gmail.com</a>
              </li>
            </div>

            <div className="footer__sv">
              <li className="footer__icon">
                <a href="https://goo.gl/maps/oD4H5WuzsGLrWrJo6" className="footer__icon footer__icon-geo"></a>
              </li>
              <li>
                <a href="https://goo.gl/maps/oD4H5WuzsGLrWrJo6" className="footer__link">
                  123 Dartmouth Street Boston, <br />
                  Massachusetts 02156 United States
                </a>
              </li>
            </div>
          </ul>
        </div>

        <div className="footer__group__container">
          <h2 className="footer__group__heading">Company</h2>
          <ul className="footer__group">
            <li className="footer__link__group">
              <a href="/" className="footer__link">About</a>
            </li>
            <li className="footer__link__group">
              <a href="/" className="footer__link">Contact</a>
            </li>
            <li className="footer__link__group">
              <a href="/" className="footer__link">Blogs</a>
            </li>
          </ul>
        </div>

        <div className="footer__content_legal">
          <h2 className="footer__group__heading">Legal</h2>
          <ul className="footer__group">
            <li className="footer__link__group">
              <a href="#" className="footer__link">Privacy Policy</a>
            </li>
            <li className="footer__link__group">
              <a href="#" className="footer__link">Terms & Services</a>
            </li>
            <li className="footer__link__group">
              <a href="#" className="footer__link">Terms of Use</a>
            </li>
            <li className="footer__link__group">
              <a href="#" className="footer__link">Refund Policy</a>
            </li>
          </ul>
        </div>

        <div className="footer__content_quickLinks">
        <h2 className="footer__group__heading">Legal</h2>
          <ul className="footer__group">
            <li className="footer__link__group">
              <a href="#" className="footer__link">Techlabz Keybox</a>
            </li>
            <li className="footer__link__group">
              <a href="#" className="footer__link">Downloads</a>
            </li>
            <li className="footer__link__group">
              <a href="#" className="footer__link">Forum</a>
            </li>
          </ul>
        </div>

        <div className="footer__content__subscribeForm">
        <h2 className="footer__group__heading">Join Our Newsletter</h2>
        <div className="footer__group">
          <div className="subscribeAre">
            <input 
              type="email"
              name="email"
              placeholder="Your email address" 
            />

            <button type="submit" className="footer__button">Subscribe</button>
          </div>

          <div className="subscribe_policy">
            * Will send you weekly updates for your better tool managment.
          </div>
        </div>
      </div>
      </div>


    </footer>
  );
})