import React from 'react';
import css from './ContactList.module.css';
// import contacts from './todos.json';

const ContactList = ({ contacts, ondeleteContact }) => (
  <ul className={css.contactList}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={css.contactList_item}>
        <p>
          {name} {number}
        </p>
        <button
          type="button"
          className={css.btn}
          onClick={() => ondeleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);
export default ContactList;
