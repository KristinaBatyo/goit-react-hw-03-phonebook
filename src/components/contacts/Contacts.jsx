import React, { useState } from 'react';
import { ContactsContainer, ContactsTitle, ContactsItem, ContactsButton, ContactsInput} from './Contacts.styled.jsx';


    export const Contacts = ({ contacts, setContacts }) => {
        const [filter, setFilter] = useState('');
        const normalizedFilter = filter.toLowerCase();
        const visibleContacts = contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter),
        );
        const handleChange = e => {
            setFilter(e.currentTarget.value);
        };
        const onDeleteContact = contactId => {
            setContacts(contacts.filter(contact => contact.id !== contactId));
        };
        return (
            <ContactsContainer>
                <ContactsTitle>Contacts</ContactsTitle>
                <ContactsInput type="text" name="filter" value={filter} onChange={handleChange} />
                <ul>
                    {visibleContacts.map(({ id, name, number, }) => (
                        <ContactsItem key={id}>
                            {name}: {number}
                            <ContactsButton type="button" onClick={() => onDeleteContact(id)}>Delete</ContactsButton>
                        </ContactsItem>
                    ))}
                </ul>

            </ContactsContainer>
        );
    }