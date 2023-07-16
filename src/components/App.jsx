import React, { Component } from "react";
import shortid from "shortid";
import Filter from './Filter';
import Form from "./Form";
import ContactList from "./ContactList";
import contacts from './todos.json';

class App extends Component {
  state = {
    contacts: contacts,
     filter: '',
  };
//откидываем элемент, id которого совпадает с заявленным в (contactId)
  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  };

  formSubmitHandler = ({ name, number }) => {
    console.log(name, number);

    const contact = {
      id: shortid.generate(),
      name,
      number,
      is_complete: true
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }))
  };

  changeFilter = (evt) => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  render() {
    const {contacts, filter} = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
    <>
      <Form onSubmit={this.formSubmitHandler} />  
      <Filter value={filter} onChange={this.changeFilter} />
      <ContactList contacts={visibleContacts} ondeleteContact={this.deleteContact} />
    </>
        
    )
  };
};

export default App;