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
    removeAddress: builder.mutation({
      query: ({ id }) => ({
        url: `/address/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Address"],
    }),
  }),
});

export const {
  useCreateAddressMutation,
  useGetUserAddressQuery,
  useRemoveAddressMutation,
} = AddressApi;
