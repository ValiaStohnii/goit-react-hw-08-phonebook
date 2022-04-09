import { useCreateContactMutation } from 'redux/slice/contactsSlice';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import theme from '../components/theme/theme';

export const Form = () => {
  const [createContact, { isLoading }] = useCreateContactMutation();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const inputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const submitNumber = e => {
    e.preventDefault();
    createContact({ name: name, number: number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={submitNumber}
    >
      <Stack spacing={2}>
        <TextField
          id="outlined-name"
          label="Name"
          type="text"
          value={name}
          onChange={inputChange}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        ></TextField>

        <TextField
          id="outlined-name"
          label="Phone number"
          type="tel"
          value={number}
          onChange={inputChange}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        ></TextField>

        <Button
          theme={theme}
          variant="contained"
          color="primary"
          type="submit"
          disabled={isLoading}
        >
          {isLoading && 'Add...'}
          Add contact
        </Button>
      </Stack>
    </Box>
  );
};
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import contactsAction from 'redux/contacts/contacts-actions';

// export default function Form() {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');
//   const dispatch = useDispatch();

//   const inputChange = e => {
//     const { name, value } = e.currentTarget;
//     switch (name) {
//       case 'name':
//         setName(value);
//         break;

//       case 'number':
//         setNumber(value);
//         break;
//       default:
//         return;
//     }
//   };

//   const submitNumber = e => {
//     e.preventDefault();
//     dispatch(contactsAction.addContact({ name, number }));
//     reset();
//   };

//   const reset = () => {
//     setName('');
//     setNumber('');
//   };

//   return (
//     <form onSubmit={submitNumber}>
//       <label>
//         Name
//         <input
//           type="text"
//           value={name}
//           onChange={inputChange}
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//         />
//       </label>
//       <label>
//         Number
//         <input
//           type="tel"
//           value={number}
//           onChange={inputChange}
//           name="number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//         />
//       </label>

//       <button type="submit">Add contact</button>
//     </form>
//   );
// }
