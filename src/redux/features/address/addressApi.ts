import { baseApi } from "../../api/baseApi";

const AddressApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createAddress: builder.mutation({
      query: (addressInfo) => ({
        url: "/address",
        method: "POST",
        body: addressInfo,
      }),
      invalidatesTags: ["Address"],
    }),
  }),
});

export const { useCreateAddressMutation } = AddressApi;
