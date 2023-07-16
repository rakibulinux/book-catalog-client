import { api } from "@/redux/api/apiSlice";
interface IBook {
  title: string;
  image: string;
  author: string;
  genre: string;
  publicationDate: string;
}
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
    updateBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/book/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
    createBook: builder.mutation<IBook, Partial<IBook>>({
      query: (data) => ({
        url: "/book",
        method: "POST",
        body: data,
      }),
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
  useUpdateBookMutation,
  useCreateBookMutation,
} = productApi;
