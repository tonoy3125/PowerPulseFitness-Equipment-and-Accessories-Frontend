import { baseApi } from "../../api/baseApi";

const CheckoutApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCheckout: builder.mutation({
      query: (checkoutData) => ({
        url: "/checkout/",
        method: "POST",
        body: checkoutData,
      }),
      invalidatesTags: ["Checkout"],
    }),
    getSingleOrder: builder.query({
      query: (id: string) => ({
        url: `/checkout/${id}`,
        method: "GET",
      }),
      providesTags: (id) => [{ type: "Checkout", id }],
    }),
  }),
});

export const { useCreateCheckoutMutation, useGetSingleOrderQuery } =
  CheckoutApi;
