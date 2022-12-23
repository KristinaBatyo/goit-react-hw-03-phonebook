import { Component } from "react";
import PropTypes from "prop-types";
import {PhonebookContainer, PhonebookForm, PhonebookLabel, PhonebookInput, PhonebookButton, PhonebookTitle} from "./Phonebook.styled";

    export class Phonebook extends Component {
    state = {
        name: '',
        number: ''
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    }

    reset = () => {
        this.setState({ name: '', number: '' });
    }

    render() {
        return (
        <PhonebookContainer>
            <PhonebookTitle>Phonebook</PhonebookTitle>
            <PhonebookForm onSubmit={this.handleSubmit}>
            <PhonebookLabel>
                Name:
                <PhonebookInput
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                />
            </PhonebookLabel>
            <PhonebookLabel>
                Number:
                <PhonebookInput
                type="tel"
                name="number"
                value={this.state.number}
                onChange={this.handleChange}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                />
            </PhonebookLabel>
            <PhonebookButton type="submit">Add contact</PhonebookButton>
            </PhonebookForm>
        </PhonebookContainer>
        );
    }
    }

    Phonebook.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    };
