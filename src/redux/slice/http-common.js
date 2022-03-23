// import axios from 'axios';

// const http = axios.create({
//   baseUrl: 'https://connections-api.herokuapp.com/',
//   headers: {
//     'Content-type': 'application/json',
//   },
// });

// export default http;
// /////////////////////////////////////

// export const signUp = userData => {
//   return http.post('users/signup', userData);
// };

// export const logIn = userData => {
//   return http.post('users/login', userData);
// };

// export const logOut = () => {
//   return http.post('users/logout');
// };
///////////////////////////////////

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
  }),
  tagTypes: ['User'],
  endpoints: builder => ({
    signUp: builder.mutation({
      query: newUser => ({
        url: 'users/signup',
        method: 'POST',
        body: newUser,
      }),
      invalidatesTags: ['User'],
    }),
    logIn: builder.mutation({
      query: logInUser => ({
        url: 'users/login',
        method: 'POST',
        body: logInUser,
      }),
      invalidatesTags: ['User'],
    }),
    logOut: builder.mutation({
      query: usersId => ({
        url: 'users/logout',
        method: 'POST',
        body: usersId,
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const { useSignUpMutation, useLogInMutation, useLogOutMutation } =
  usersApi;
