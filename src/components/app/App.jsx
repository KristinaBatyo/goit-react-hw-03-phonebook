import { Phonebook } from "components/phonebook/Phonebook";
import { Contacts } from "components/contacts/Contacts";
import { Component } from "react";
import { nanoid } from "nanoid";

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
    

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }))
  }

  setContacts = (contacts) => {
    this.setState({ contacts });
  }

  render() {
    return (
      <>
        <Phonebook onSubmit={this.addContact} />
        <Contacts contacts={this.state.contacts} setContacts={this.setContacts} />
      </>
    );
  }
}
