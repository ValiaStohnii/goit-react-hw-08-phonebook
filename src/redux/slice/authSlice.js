import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'authUser',
  initialState: null,
  reducers: {
    singUpUser: (state, action) => {},
    logInUser: (state, action) => {},
    logOutUser: (state, action) => {},
  },
});

export const { singUpUser, logInUser, logOutUser } = authSlice.actions;

export default authSlice.reducer;
