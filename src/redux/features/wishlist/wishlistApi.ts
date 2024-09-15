import { baseApi } from "../../api/baseApi";

const wishlistApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addWishlist: builder.mutation({
      query: ({ token, productId }) => ({
        url: "/wishlist",
        method: "POST",
        body: { productId },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    removeWishlist: builder.mutation({
      query: ({ token, productId }) => ({
        url: `/wishlist/${productId}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    getWishlist: builder.query({
      query: (token) => ({
        url: "/wishlist",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const {
  useAddWishlistMutation,
  useRemoveWishlistMutation,
  useGetWishlistQuery,
} = wishlistApi;
