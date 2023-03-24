import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const authApi = createApi({
  redcerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
  }),
  tagTypes: ['isLoggedIn'],
  endpoints: builder => ({
    // getContacts: builder.query({
    //   query: () => `/contacts`,
    //   providesTags: ['Contacts'],
    // }),
    addContacts: builder.mutation({
      query: credentials => ({
        url: '/users/signup',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['Contacts'],
    }),
    // deleteContact: builder.mutation({
    //   query: contactId => ({
    //     url: `/contacts/${contactId}`,
    //     method: 'DELETE',
    //   }),
    //   invalidatesTags: ['Contacts'],
    // }),
  }),
});
