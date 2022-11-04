import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import ICoursesList from '../../../Types/courses-list-types';

const URL = 'http://localhost:3005/api';

export const courseApi: any = createApi({
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
      query: (body: ICoursesList) => ({
        url: '/course',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Course', id: 'CourseList' }],
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
      invalidatesTags: [{ type: 'Course', id: 'CourseList' }],
    }),
    deleteCourse: build.mutation({
      query: (id) => ({
        url: `/course/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Course', id: 'CourseList' }],
    }),
  }),
});

export const {
  useGetCourseQuery,
  useCreateCourseMutation,
  useEditCourseMutation,
  useDeleteCourseMutation,
  useGetOneCourseQuery,
} = courseApi;
