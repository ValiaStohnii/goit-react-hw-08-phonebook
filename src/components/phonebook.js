import { useFetchContactsQuery } from 'redux/slice/contactsSlice';
import ContactList from './ContactList';
import { Form } from './Form';
import Filter from './Filter';
import { useSelector } from 'react-redux';

const Phonebook = () => {
  const { data: contacts } = useFetchContactsQuery();
  const filter = useSelector(state => state.filter);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(c =>
      c.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      {contacts && <ContactList contacts={getFilteredContacts()} />}
    </div>
  );
};

export default Phonebook;

// import { useState } from 'react';
// import Form from './Form';
// import ContactList from './ContactList';
// import { nanoid } from 'nanoid';
// import Filter from './Filter';
// import { useDispatch } from 'react-redux';
// import contactsAction from 'redux/contacts/contacts-actions';
//
// export default function Phonebook() {
//   const [contacts, setContacts] = useState([]);
//   // () => {
//   // return JSON.parse(window.localStorage.getItem('contacts')) ?? [];}

//   const [filter, setFilter] = useState('');
//   const dispatch = useDispatch();

//   // useEffect(() => {
//   //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
//   // }, [contacts]);

//   const formSubmit = data => {
//     const contact = {
//       id: nanoid(),
//       name: data.name,
//       number: data.number,
//     };
//     console.log(contact);

//     if (
//       contacts.some(item => item.name.toLowerCase() === data.name.toLowerCase())
//     ) {
//       alert('This name is olready in contact');
//       return;
//     }
//     dispatch(contactsAction.addContact(contact));
//     setContacts(prevState => [contact, ...prevState]);
//   };

//   const changeFilter = e => {
//     setFilter(e.currentTarget.value);
//   };

//   // const getFilteredContacts = () => {
//   //   const normalizedFilter = filter.toLowerCase();
//   //   return contacts.filter(c =>
//   //     c.name.toLowerCase().includes(normalizedFilter)
//   //   );
//   // };

//   // const deleteContact = contactId => {
//   //   setContacts(prevState => prevState.filter(c => c.id !== contactId));
//   // };

//   return (
//     <div>
//       <h1>Phonebook</h1>
//       <Form onSubmit={formSubmit} />
//       <h2>Contacts</h2>
//       <Filter value={filter} onChange={changeFilter} />
//       <ContactList
//       // contacts={getFilteredContacts()}
//       // onDeleteContact={deleteContact}
//       />
//     </div>
//   );
// }
