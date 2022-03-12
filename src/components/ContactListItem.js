import { useDeleteContactMutation } from 'redux/slice/contactsSlice';

const ContactListItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  return (
    <li name={name}>
      <p>{name}</p>
      <p>{number}</p>
      <button type="button" onClick={() => deleteContact(id)}>
        {isDeleting ? 'Deleting...' : 'Delete'}
      </button>
    </li>
  );
};

export default ContactListItem;
