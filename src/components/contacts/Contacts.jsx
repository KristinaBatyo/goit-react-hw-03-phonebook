import React, { useState } from 'react';


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
            <>
                <h2>Contacts</h2>
                <input type="text" name="filter" value={filter} onChange={handleChange} />
                <ul>
                    {visibleContacts.map(({ id, name, number, }) => (
                        <li key={id}>
                            {name}: {number}
                            <button type="button" onClick={() => onDeleteContact(id)}>Delete</button>
                        </li>
                    ))}
                </ul>

            </>
        );
    }