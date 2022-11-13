import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const URL = 'http://localhost:3005/api';
const URL = 'https://lang4u-server.onrender.com/api';

export const firstLessonApi = createApi({
  reducerPath: 'firstLessonApi',
  tagTypes: ['FirstLesson'],
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (build) => ({
    firstLesson: build.mutation({
      query: (body) => ({
        url: '/lesson',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['FirstLesson'],
    }),
  }),
});

export const { useFirstLessonMutation } = firstLessonApi;
