import React from "react";
import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = ({ contact, deleteContact }) => {
  return (
    <div className={css.contact}>
      <div className={css.name}>
        <FaUser />
        {contact.name}
      </div>
      <div className={css.number}>
        <BsFillTelephoneFill />
        {contact.number}
      </div>
      <div className={css.button}>
        <button onClick={() => deleteContact(contact.id)}>Delete</button>
      </div>
    </div>
  );
};

export default Contact;
