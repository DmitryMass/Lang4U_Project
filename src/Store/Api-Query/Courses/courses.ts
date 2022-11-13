import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import ICoursesList from '../../../Types/courses-list-types';
// const URL = 'http://localhost:3005/api';
const URL = 'https://lang4u-server.onrender.com/api';

export const courseApi = createApi({
  reducerPath: 'getCoursesApi',
  tagTypes: ['Course'],
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (build) => ({
    getCourse: build.query<ICoursesList[], any>({
      query: () => '/course',
      providesTags: (result: ICoursesList[] | any) =>
        result
          ? [
              ...result.map(({ id }: any) => ({ type: 'Course', id })),
              { type: 'Course', id: 'LIST' },
            ]
          : [{ type: 'Course', id: 'LIST' }],
    }),
    createCourse: build.mutation({
      query: (body: any) => ({
        url: '/course',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Course', id: 'LIST' }],
    }),
    getOneCourse: build.query<ICoursesList, string>({
      query: (id) => `/course/${id}`,
    }),
    editCourse: build.mutation({
      query: (body) => ({
        url: `/course/${body.id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: [{ type: 'Course', id: 'LIST' }],
    }),
    deleteCourse: build.mutation({
      query: (id) => ({
        url: `/course/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Course', id: 'LIST' }],
    }),
    bindCourse: build.mutation({
      query: (body) => ({
        url: '/course/bindcourse',
        method: 'POST',
        body,
        headers: {
          authorization: `${localStorage.getItem('user')}`,
        },
      }),
    }),
  }),
});

export const {
  useGetCourseQuery,
  useCreateCourseMutation,
  useEditCourseMutation,
  useDeleteCourseMutation,
  useGetOneCourseQuery,
  useLazyGetCourseQuery,
  useBindCourseMutation,
} = courseApi;
