import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const URL = 'http://localhost:3005/api';

export const supportApi = createApi({
  reducerPath: 'supportApi',
  tagTypes: ['Support'],
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (build) => ({
    supportRequest: build.mutation({
      query: (body) => ({
        url: '/support',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Support'],
    }),
  }),
});

export const { useSupportRequestMutation } = supportApi;
