import React, { useState } from 'react';


    export const Contacts = ({ contacts }) => {
        const [filter, setFilter] = useState('');
        const normalizedFilter = filter.toLowerCase();
        const visibleContacts = contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter),
        );
        const handleChange = e => {
            setFilter(e.currentTarget.value);
        };
        return (
            <>
                <h2>Contacts</h2>
                <input type="text" name="filter" value={filter} onChange={handleChange} />
                <ul>
                    {visibleContacts.map(({ id, name, number, }) => (
                        <li key={id}>
                            {name}: {number}
                        </li>
                    ))}
                </ul>
            </>
        );
    }
