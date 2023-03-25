import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, register } from './options';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  // extraReducers: {
  //   [register.fulfilled](state, action) {
  //     state.user = action.payload.user;
  //     state.token = action.payload.token;
  //     state.isLoggedIn = true;
  //   },
  //   [logIn.fulfilled](state, action) {
  //     state.user = action.payload.user;
  //     state.token = action.payload.token;
  //     state.isLoggedIn = true;
  //   },
  //   [logOut.fulfilled](state) {
  //     state.user = { name: null, email: null };
  //     state.token = null;
  //     state.isLoggedIn = false;
  //   },
  // },
  extraReducers: builder => {
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.rejected, handleRejected)
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.pending, handlePending)
      .addCase(logIn.rejected, handleRejected)
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.pending, handlePending)
      .addCase(logOut.rejected, handleRejected)
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      });
  },
});

export const authReducer = authSlice.reducer;

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { REHYDRATE } from 'redux-persist';

// export const authApi = createApi({
//   redcerPath: 'authApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://connections-api.herokuapp.com/',
//     prepareHeaders: (headers, { getState }) => {
//       // .auth.token;
//       const token = getState();

//       console.log(token);
//       // If we have a token set in state, let's assume that we should be passing it.
//       if (token) {
//         headers.set('Authorization', `Bearer ${token}`);
//       }

//       return headers;
//     },
//   }),
//   extractRehydrationInfo(action, { reducerPath }) {
//     if (action.type === REHYDRATE) {
//       return action.payload[reducerPath];
//     }
//   },
//   tagTypes: ['isLoggedIn', 'Contacts'],
//   endpoints: builder => ({
//     register: builder.mutation({
//       query: credentials => ({
//         url: '/users/signup',
//         method: 'POST',
//         body: credentials,
//       }),
//       invalidatesTags: ['isLoggedIn'],
//     }),
//     logIn: builder.mutation({
//       query: credentials => ({
//         url: '/users/login',
//         method: 'POST',
//         body: credentials,
//       }),
//       invalidatesTags: ['isLoggedIn'],
//     }),
//     getContacts: builder.query({
//       query: () => `/contacts`,
//       providesTags: ['Contacts'],
//     }),
//     addContacts: builder.mutation({
//       query: value => ({
//         url: '/contacts',
//         method: 'POST',
//         body: value,
//       }),
//       invalidatesTags: ['Contacts'],
//     }),
//     // deleteContact: builder.mutation({
//     //   query: contactId => ({
//     //     url: `/contacts/${contactId}`,
//     //     method: 'DELETE',
//     //   }),
//     //   invalidatesTags: ['Contacts'],
//     // }),
//   }),
// });

// export const { useRegisterMutation, useLogInMutation } = authApi;
