import { TResponseRedux } from "@/types";
import { baseApi } from "../../api/baseApi";
import { TProductData } from "@/types/productData.type";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        // Loop through args and append them to params
        Object.keys(args).forEach((key) => {
          if (Array.isArray(args[key])) {
            // Handle array for categories (or other multiple values)
            args[key].forEach((value: string) => {
              params.append(key, value);
            });
          } else if (args[key]) {
            // Append normal key-value pairs
            params.append(key, args[key]);
          }
        });

        return {
          url: "/products",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TProductData[]>) => {
        console.log("inside redux", response);
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    getSingleProductById: builder.query({
      query: (id: string) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
      transformResponse: (response: TResponseRedux<TProductData[]>) => {
        console.log("Single Data", response);
        return {
          data: response.data,
        };
      },
    }),
    getProductsByCategory: builder.query({
      query: (category: string) => ({
        url: `/products/category/${category}`,
        method: "GET",
      }),
      transformResponse: (response: TResponseRedux<TProductData[]>) => {
        console.log("Single Category All Data", response);
        return {
          data: response.data,
        };
      },
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetSingleProductByIdQuery,
  useGetProductsByCategoryQuery,
} = productApi;
