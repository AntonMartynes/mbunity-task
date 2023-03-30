import { ContactInputs } from '../ContactInputs/ContactInputs';
import { ContactForm } from './../ContactForm/ContactForm';
import './ContactPage.scss';

export const ContactPage = () => {
  return (
    <section className="contactUs">
      <h1 className="contactUs__heading">Contact Us</h1>
      <p className="contactUs__text">
        Any question or remarks? Just write us a message!
      </p>
      <srction className="contactUs__container">
        <ContactForm />
        <ContactInputs />
      </srction>
      
    </section>
  )
}