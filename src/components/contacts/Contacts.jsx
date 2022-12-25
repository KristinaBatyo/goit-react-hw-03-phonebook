import { ContactsContainer, ContactsTitle, ContactsItem, ContactsButton, ContactsInput} from './Contacts.styled.jsx';
import PropTypes from "prop-types";

export const Contacts = ({ contacts, onDeleteContact, setFilter }) => (
    <ContactsContainer>
    <ContactsTitle>Contacts</ContactsTitle>
    <ContactsInput type="text" onChange={setFilter} />
    <>
    {contacts.map(({ id, name, number }) => (
        <ContactsItem key={id}>
        {name}: {number}
        <ContactsButton type="button" onClick={() => onDeleteContact(id)}>
            Delete
        </ContactsButton>
        </ContactsItem>
    ))}
    </>
    </ContactsContainer>
);

Contacts.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    onDeleteContact: PropTypes.func.isRequired,
    setFilter: PropTypes.func.isRequired,
};

