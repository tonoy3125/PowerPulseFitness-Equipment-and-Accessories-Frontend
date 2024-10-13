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
  }),
});

export const { useCreateProductReviewMutation, useGetAllProductReviewsQuery } =
  ProductReviewApi;
