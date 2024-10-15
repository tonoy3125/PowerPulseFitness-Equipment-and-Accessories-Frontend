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
    getAcceptedProductReviewsByProductId: builder.query({
      query: ({ productId }) => ({
        url: `/review/accepted?productId=${productId}`,
        method: "GET",
      }),
      providesTags: ["Review"],
    }),
    getPendingProductReviewsByProductId: builder.query({
      query: ({ productId }) => ({
        url: `/review/pending?productId=${productId}`,
        method: "GET",
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
    removePendingProductReviewByProductId: builder.mutation({
      query: ({ productId, token }) => ({
        url: `/review/pending?productId=${productId}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Review"],
    }),
    removeProductReview: builder.mutation({
      query: ({ id, token }) => ({
        url: `/review/${id}`,
        method: "DELETE",
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
  useGetAcceptedProductReviewsByProductIdQuery,
  useGetPendingProductReviewsByProductIdQuery,
  useRemovePendingProductReviewByProductIdMutation,
  useUpdateReviewStatusMutation,
  useRemoveProductReviewMutation,
} = ProductReviewApi;
