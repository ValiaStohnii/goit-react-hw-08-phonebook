import { useFetchContactsQuery } from 'redux/slice/contactsSlice';
import ContactList from './ContactList';
import { Form } from './Form';
import Filter from './Filter';
import { useSelector } from 'react-redux';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Phonebook = () => {
  const { data: contacts } = useFetchContactsQuery();
  const filter = useSelector(state => state.filter);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    console.log(contacts);
    return contacts.filter(c =>
      c.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
        Phonebook
      </Typography>
      <Form />
      <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
        Contacts
      </Typography>
      <Filter />
      {contacts && <ContactList contacts={getFilteredContacts()} />}
    </Container>
  );
};

export default Phonebook;
