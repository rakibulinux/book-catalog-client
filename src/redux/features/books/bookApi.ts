/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { api } from "@/redux/api/apiSlice";

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/book",
    }),
    getLimitBooks: builder.query({
      query: () => `/book?limit=10`,
    }),
    singleBook: builder.query({
      query: (id) => `/book/${id}`,
    }),
    postReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `/review/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["reviews"],
    }),
    getReview: builder.query({
      query: (id) => ({
        url: `/review/${id}`,
      }),
      providesTags: ["reviews"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetReviewQuery,
  usePostReviewMutation,
  useSingleBookQuery,
  useGetLimitBooksQuery,
} = productApi;
