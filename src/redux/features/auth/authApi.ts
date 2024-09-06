import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),
    forgetPassword: builder.mutation({
      query: (email) => ({
        url: "/auth/forget-password",
        method: "POST",
        body: email,
      }),
    }),
    resetPassword: builder.mutation({
      query: ({ token, ...passwordData }) => ({
        url: "/auth/reset-password",
        method: "POST",
        body: passwordData,
        headers: {
          Authorization: `${token}`, // Attach the token in the headers
        },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useForgetPasswordMutation,
  useResetPasswordMutation,
} = authApi;
