import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'authUser',
  initialState,
  reducers: {
    singUpUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    logInUser: (state, action) => {},
    logOutUser: (state, action) => {},
  },
});

export const { singUpUser, logInUser, logOutUser } = authSlice.actions;
export const authNameSelector = state => state.authUser.user.name;
export const authIsLoggedInSelector = state => state.authUser.isLoggedIn;
export default authSlice.reducer;
