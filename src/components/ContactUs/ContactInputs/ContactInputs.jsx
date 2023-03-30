
import { useState } from "react";
import "./ContactInputs.scss";

export const ContactInputs = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [radioButton, setRadioButton] = useState("");



  const handleSubmit = (event) => {
    event.preventDefault();

    setName("");
    setSurname("");
    setEmail("");
    setPhoneNumber("");
    setMessage("");
    setRadioButton("");
  };

  return (
    <form
      action=""
      className="contactInputs"
      onSubmit={(event) => handleSubmit(event)}
    >
      <div className="contactInputs__input__align__container">
        <div className="contactInputs__input__container">
          <label
            htmlFor="name"
            className="contactInputs__input__label"
            style={name ? { color: "#000" } : {}}
          >
            First Name
          </label>
          <input
            type="text"
            className="contactInputs__input"
            id="name"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="contactInputs__input__container">
          <label
            htmlFor="surname"
            className="contactInputs__input__label"
            style={surname ? { color: "#000" } : {}}
          >
            Last Name
          </label>
          <input
            type="text"
            className="contactInputs__input"
            id="surname"
            required
            value={surname}
            onChange={(event) => setSurname(event.target.value)}
          />
        </div>
      </div>
      <div className="contactInputs__input__align__container">
        <div className="contactInputs__input__container">
          <label
            htmlFor="email"
            className="contactInputs__input__label"
            style={email ? { color: "#000" } : {}}
          >
            Email
          </label>
          <input
            type="email"
            className="contactInputs__input"
            id="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="contactInputs__input__container">
          <label
            htmlFor="phoneNum"
            className="contactInputs__input__label"
            style={phoneNumber ? { color: "#000" } : {}}
          >
            Phone Number
          </label>
          <input
            type="tel"
            className="contactInputs__input"
            id="phoneNum"
            required
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </div>
      </div>
      <div className="contactInputs__radio">
        <h2 className="contactInputs__radio_heading">Select Subject?</h2>
        <ul className="contactInputs__radio__container">
          <li className="contactInputs__radio__align__container">
            <div className="contactInputs__radio__option__container">
              <input
                type="radio"
                name="options"
                className="contactInputs__radio__input"
                id="option1"
                checked={radioButton === "option1"}
                value="option1"
                onChange={(event) => setRadioButton(event.target.value)}
              />
              <label htmlFor="option1" className="contactInputs__radio__label">
                General Inquiry
              </label>
            </div>
            <div className="contactInputs__radio__option__container">
              <input
                type="radio"
                name="options"
                className="contactInputs__radio__input"
                id="option2"
                checked={radioButton === "option2"}
                value="option2"
                onChange={(event) => setRadioButton(event.target.value)}
              />
              <label htmlFor="option2" className="contactInputs__radio__label">
                General Inquiry
              </label>
            </div>
          </li>
          <li className="contactInputs__radio__align__container">
            <div className="contactInputs__radio__option__container">
              <input
                type="radio"
                name="options"
                className="contactInputs__radio__input"
                id="option3"
                checked={radioButton === "option3"}
                value="option3"
                onChange={(event) => setRadioButton(event.target.value)}
              />
              <label htmlFor="option3" className="contactInputs__radio__label">
                General Inquiry
              </label>
            </div>
            <div className="contactInputs__radio__option__container">
              <input
                type="radio"
                name="options"
                className="contactInputs__radio__input"
                id="option4"
                checked={radioButton === "option4"}
                value="option4"
                onChange={(event) => setRadioButton(event.target.value)}
              />
              <label htmlFor="option4" className="contactInputs__radio__label">
                General Inquiry
              </label>
            </div>
          </li>
        </ul>
      </div>
      <div className="contactInputs__textArea__container">
        <label
          htmlFor="message"
          className="contactInputs__input__label"
          style={message ? { color: "#000" } : {}}
        >
          Message
        </label>
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          name="message"
          id="message"
          className="contactInputs__textArea"
          maxLength={400}
          placeholder="Write your message.."
        ></textarea>
      </div>
      <div className="contactInputs__button--with--plane__container">
        <button type="submit" className="contactInputs__button">
          Send Message
        </button>
        <div className="contactInputs__plane" />
      </div>
    </form>
  );
};