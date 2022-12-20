import { Phonebook } from "components/phonebook/Phonebook";
import { Contacts } from "components/contacts/Contacts";
import { Component } from "react";
import { nanoid } from "nanoid";


export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: ''
  }

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }))
  }

  render() {
    return (
      <>
        <Phonebook onSubmit={this.addContact} />
        <Contacts contacts={this.state.contacts} />
      </>
    );
  }
}