import { baseApi } from "../../api/baseApi";

const wishlistApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addWishlist: builder.mutation({
      query: (data) => ({
        url: "/wishlist",
        method: "POST",
        body: data,
      }),
    }),
    removeWishlist: builder.mutation({
      query: (productId) => ({
        url: `/wishlist/${productId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useAddWishlistMutation, useRemoveWishlistMutation } = wishlistApi;
