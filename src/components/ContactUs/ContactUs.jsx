import { memo } from "react";
import './ContactUs.scss';

export const ContactUs = memo(() => {
  return (
    <div className="contactUs">
      <h1 className="contactUs__heading">
      Contact Us
    </h1>

    <h3 className="contactUs__content">
      Any questions or remarks? Just write us a message!
    </h3>
    </div>
    
  )
})
