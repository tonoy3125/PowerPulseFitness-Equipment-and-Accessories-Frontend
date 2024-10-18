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
    getUserAddress: builder.query({
      query: (token) => ({
        url: "/address",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["Address"],
    }),
  }),
});

export const { useCreateAddressMutation, useGetUserAddressQuery } = AddressApi;
