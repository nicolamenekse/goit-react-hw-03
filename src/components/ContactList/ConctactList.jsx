import React from "react";
import Contact from "../Contact/Contact";
import css from './ContactList.module.css'
const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div className={css.contactList}>
      <ul>
        <li>
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteContact={deleteContact}
          />
        ))}
        </li>
      </ul>
    </div>
  );
};

export default ContactList;
