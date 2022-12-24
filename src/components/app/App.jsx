import { Phonebook } from "components/phonebook/Phonebook";
import { Contacts } from "components/contacts/Contacts";
import { Component } from "react";
import { nanoid } from "nanoid";
import{AppContainer} from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: ''
  }

  addContact = ({ name, number, filter }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
      filter,
    }
    const isExistContact = this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
    if (isExistContact) {
      alert(`${name} is already in contacts`);
      return;
    }
    

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  }

  setContacts = (contacts) => {
    this.setState({ contacts });
  };
  
  handleChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  onDeleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  }

render() {
    const { contacts } = this.state;
    const { filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
    return (
        <AppContainer>
        <Phonebook onSubmit={this.addContact} />
        <Contacts contacts={visibleContacts} onDeleteContact={this.onDeleteContact} setFilter={this.handleChange} />
        </AppContainer>
    );
}
}


