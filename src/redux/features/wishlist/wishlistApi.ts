import { baseApi } from "../../api/baseApi";

const wishlistApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    toggleWishlist: builder.mutation({
      query: ({ token, productId }) => ({
        url: `/wishlist/${productId}`,
        method: "POST",
        body: { productId },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Wishlist"],
    }),

    getWishlist: builder.query({
      query: (token) => ({
        url: "/wishlist",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["Wishlist"],
    }),
  }),
});

export const { useToggleWishlistMutation, useGetWishlistQuery } = wishlistApi;
