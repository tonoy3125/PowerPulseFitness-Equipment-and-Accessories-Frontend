import { baseApi } from "../../api/baseApi";

const ProductReviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProductReview: builder.mutation({
      query: (reviewInfo) => ({
        url: "/review",
        method: "POST",
        body: reviewInfo,
      }),
      invalidatesTags: ["Review"],
    }),
    getAllProductReviews: builder.query({
      query: (token) => ({
        url: "/review",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["Review"],
    }),
    updateReviewStatus: builder.mutation({
      query: ({ reviewId, status, token }) => ({
        url: "/review/status",
        method: "PATCH",
        body: { reviewId, status },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Review"],
    }),
  }),
});

export const {
  useCreateProductReviewMutation,
  useGetAllProductReviewsQuery,
  useUpdateReviewStatusMutation,
} = ProductReviewApi;
