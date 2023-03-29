import { useState } from 'react';
import './JoinNewsletter.scss';

export const JoinNewsletter = () => {
  // In bigger project I'd named this like "emailQuery" or smth like that
  const [email, setEmail] = useState('');

  return (
    // I'm not using any actions because in a nutshell this form is doing nothing
    // and I decided not to make any handleSubmit callbacks 'cause there are not much to do 
    <form action="" onSubmit={event => {event.preventDefault(); setEmail('')}} className="joinNewsletter">
      <h2 className="joinNewsletter__heading">Join Our Newsletter</h2>
      <div className="joinNewsletter__input__container">
        <input 
          type="text" 
          placeholder='Your email address' 
          className="joinNewsletter__input"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <button type='submit' className="joinNewsletter__btn">
          Subscribe
        </button>
      </div>
      <p className="joinNewsletter__text">
        *Will send you weekly updates for your better tool management.
      </p>
    </form>
  )
}