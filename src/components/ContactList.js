import ContactListItem from './ContactListItem';
import List from '@mui/material/List';

const ContactList = ({ contacts }) => {
  return (
    <List sx={{ width: '100%', maxWidth: 360 }}>
      {contacts.map(contacts => (
        <ContactListItem key={contacts.id} {...contacts} />
      ))}
    </List>
  );
};

export default ContactList;
