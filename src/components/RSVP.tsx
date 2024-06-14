import React, { useRef, useState } from "react";
import Envelope from "../assets/Envelope.png";
import Sent from "../assets/Sent.png";
import emailjs, { init } from "@emailjs/browser";
import { motion } from "framer-motion";

export default function RSVP(): JSX.Element {
  const form = useRef<HTMLFormElement>(null);
  const [isAttending, setIsAttending] = useState<boolean | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  console.log(isAttending);

  const handleRadioChange = (attending: boolean) => {
    setIsAttending(attending);
    setIsSubmitted(false);
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsSubmitted(true);
    if (form.current) {
      emailjs
        .sendForm("service_ctyuukj", "template_ud7w21n", form.current, {
          publicKey: "sR0LMHDgWJggw6gDZ",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            if (form.current) {
              form.current.reset();
            }

            setIsAttending(null);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <div className="component purple-background">
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: isSubmitted ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      >
        <img src={Envelope} style={{ width: "50px" }} alt="Envelope" />
      </motion.div>

      <motion.div
        initial={{ x: 0, scale: 0 }}
        animate={{
          scale: isSubmitted ? 3 : 0,
          x: isSubmitted ? window.innerWidth : 0,
          rotate: 10,
        }}
        transition={{ delay: 0.3, duration: 3 }}
      >
        {isSubmitted ? (
          <img src={Sent} style={{ width: "50px" }} alt="Sent" />
        ) : null}
      </motion.div>

      <h2 id="isAttending">
        {isAttending === null
          ? "please rsvp"
          : isAttending
          ? "you are attending"
          : "you won't be attending"}
      </h2>
      <form className="contact-form" onSubmit={sendEmail} ref={form}>
        <div className="form-line">
          <label htmlFor="rsvpFrom">Name of Attendee:</label>
          <input className="input" type="text" id="rsvpFrom" name="rsvpFrom" />
        </div>

        <div className="form-line">
          <label htmlFor="numberOfGuests">Number of Attendees:</label>
          <input
            className="input"
            type="number"
            id="numberOfGuests"
            name="numberOfGuests"
          />
        </div>

        <div className="form-line">
          <label htmlFor="rsvpEmail">Email Address:</label>
          <input
            className="input"
            type="email"
            id="rsvpEmail"
            name="rsvpEmail"
          />
        </div>

        <div className="form-line radio-buttons">
          <label className="radio-label" htmlFor="isAttending">
            I'LL BE THERE
            <input
              className="input radio"
              type="radio"
              checked={isAttending === true}
              onChange={() => handleRadioChange(true)}
              name="isAttending"
              value="I'LL BE ATTENDING"
            />
          </label>
          <label className="radio-label" htmlFor="isAttending">
            I CAN'T MAKE IT
            <input
              className="input radio"
              type="radio"
              checked={isAttending === false}
              onChange={() => handleRadioChange(false)}
              name="isAttending"
              value="I CAN'T MAKE IT"
            />
          </label>
        </div>

        <div className="form-line submit-button">
          <button className="input submit" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
