import { baseApi } from "../../api/baseApi";

const CartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCart: builder.mutation({
      query: ({ token, data }) => ({
        url: "/addToCart/",
        method: "POST",
        body: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Cart"],
    }),
    getAllCartByUser: builder.query({
      query: (token) => ({
        url: "/addToCart/user-cart",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["Cart"],
    }),
  }),
});

export const { useCreateCartMutation, useGetAllCartByUserQuery } = CartApi;
