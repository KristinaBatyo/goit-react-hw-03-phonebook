import { ContactsContainer, ContactsTitle, ContactsItem, ContactsButton, ContactsInput} from './Contacts.styled.jsx';


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

