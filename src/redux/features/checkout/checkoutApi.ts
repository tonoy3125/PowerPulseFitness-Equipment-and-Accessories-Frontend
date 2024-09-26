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
  }),
});

export const { useCreateCheckoutMutation } = CheckoutApi;
