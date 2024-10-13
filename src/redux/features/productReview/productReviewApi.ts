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
  }),
});

export const { useCreateProductReviewMutation } = ProductReviewApi;
