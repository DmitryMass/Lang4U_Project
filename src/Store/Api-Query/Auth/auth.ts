import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const URL = 'http://localhost:3005/api';
// credentials: 'include'

export const registrationApi = createApi({
  reducerPath: 'registrationApi',
  tagTypes: ['Registration'],
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (build) => ({
    registration: build.mutation({
      query: (body) => ({
        url: '/registration',
        method: 'POST',
        body,
        credentials: 'include',
      }),
      invalidatesTags: ['Registration'],
    }),
  }),
});

export const loginApi = createApi({
  reducerPath: 'loginApi',
  tagTypes: ['Login'],
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
  }),
  endpoints: (build) => ({
    login: build.mutation({
      query: (body) => ({
        url: '/login',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Login'],
    }),
  }),
});

export const logoutApi = createApi({
  reducerPath: 'logoutApi',
  tagTypes: ['Logout'],
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (build) => ({
    logoutUser: build.mutation<any, any>({
      query: () => ({
        url: '/logout',
        method: 'DELETE',
      }),
      invalidatesTags: ['Logout'],
    }),
  }),
});

export const { useRegistrationMutation } = registrationApi;
export const { useLoginMutation } = loginApi;
export const { useLogoutUserMutation } = logoutApi;
