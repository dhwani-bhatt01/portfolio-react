import React from "react";
import SectionHeading from "./../../../../components/SectionHeading/SectionHeading";
import ContactImg from "./../../../../assets/contact-me.svg";
import Input from "./../../../../components/Input/Input";
import { Button } from "./../../../../components/Button/Button";
import "./ReachMe.scss";

const ReachMe = () => {
  return (
    <div className="contact container">
      <SectionHeading title="Let's Talk" />
      <div className="contact__content">
        <img
          className="contact__contactimg"
          src={ContactImg}
          alt="Contact-me-img"
        />
        <form className="contact__form">
          <Input
            label="Name"
            placeholder="Enter your name here..."
            type="text"
          />
          <Input
            label="E-mail"
            placeholder="Enter your E-mail here..."
            type="email"
          />
          <Input
            textarea
            label="Message"
            placeholder="Enter your message here..."
            rows={5}
          />
          <div className="submit-btn">
            <Button type="large" label="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReachMe;
