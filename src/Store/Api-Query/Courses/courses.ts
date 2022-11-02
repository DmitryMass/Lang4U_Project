import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const URL = 'http://localhost:3005/api';

export const courseApi = createApi({
  reducerPath: 'getCoursesApi',
  tagTypes: ['Courses'],
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (build) => ({
    getCourse: build.query({
      query: () => '/courses',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }: any) => ({ type: 'Courses', id })),
              { type: 'Courses', id: 'LIST' },
            ]
          : [{ type: 'Courses', id: 'LIST' }],
    }),
    createCourse: build.mutation({
      query: (body) => ({
        url: '/courses',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Courses', id: 'CourseList' }],
    }),
    editCourse: build.mutation({
      query: (body) => ({
        url: `/courses/${body.id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: [{ type: 'Courses', id: 'CourseList' }],
    }),
    deleteCourse: build.mutation({
      query: (id) => ({
        url: `/courses/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Courses', id: 'CourseList' }],
    }),
  }),
});

export const {
  useGetCourseQuery,
  useCreateCourseMutation,
  useEditCourseMutation,
  useDeleteCourseMutation,
} = courseApi;
