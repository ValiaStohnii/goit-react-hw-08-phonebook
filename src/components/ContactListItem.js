import { useDeleteContactMutation } from 'redux/slice/contactsSlice';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Avatar from '@mui/material/Avatar';
import theme from './theme/theme';

const ContactListItem = ({ id, name, number }) => {
  const [deleteContact] = useDeleteContactMutation();
  return (
    <ListItem
      secondaryAction={
        <IconButton
          type="button"
          onClick={() => deleteContact(id)}
          edge="end"
          aria-label="delete"
        >
          <DeleteIcon theme={theme} color="secondary" />
        </IconButton>
      }
      name={name}
    >
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: '#2f2f3f' }} alt={name} src="/broken-image.jpg">
          {/* <FolderIcon /> */}
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={name} />
      <ListItemText primary={number} />
    </ListItem>
  );
};

export default ContactListItem;
