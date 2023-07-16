/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { api } from '@/redux/api/apiSlice';

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => '/book',
    }),
    singleBook: builder.query({
      query: (id) => `/book/${id}`,
    }),
    postReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `/review/${id}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['comments'],
    }),
    getReview: builder.query({
      query: (id) => ({
        url: `/review/${id}`,
      }),
      providesTags: ['comments'],
    }),
  }),
});

export const {
useGetBooksQuery,
useGetReviewQuery,
usePostReviewMutation,
useSingleBookQuery
} = productApi;
