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
  }),
});

export const { useCreateCartMutation } = CartApi;
