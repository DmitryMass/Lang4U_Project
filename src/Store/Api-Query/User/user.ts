import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const URL = 'http://localhost:3005/api';
const URL = 'https://lang4u-server.onrender.com/api';

export const userApi = createApi({
  reducerPath: 'userApi',
  tagTypes: ['User'],
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (build) => ({
    getUserInfo: build.query({
      query: () => ({
        url: '/user',
        headers: {
          authorization: `${localStorage.getItem('user')}`,
        },
      }),
    }),
    updateUserInfo: build.mutation({
      query: (body) => ({
        url: '/user',
        method: 'POST',
        body,
        headers: {
          authorization: `${localStorage.getItem('user')}`,
        },
      }),
    }),
  }),
});

export const { useGetUserInfoQuery, useUpdateUserInfoMutation } = userApi;
