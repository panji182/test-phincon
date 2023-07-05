import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Products } from '@/app/types/Products'

// Define a service using a base URL and expected endpoints

export const fakeStoreApi = createApi({
  reducerPath: 'fakeStoreApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: (builder) => ({
    getAllProductCategories: builder.query({
      query: (name) => `products/categories`,
    }),
    getAllProducts: builder.query<any, { category: string }>({
      query: ({ category }) => ({
        url: `products`,
        params: {
          category
        }
      })
    }),
    getDetailProduct: builder.query<any, { id: number }>({
      query: ({ id }) => ({
        url: `products/${id}`
      })
    }),
    getAllCarts: builder.query({
      query: (name) => `carts/5`,
      providesTags: ["CART_LIST"],
    }),
    addNewCart: builder.mutation<any, {
      userId: number,
      date: string,
      products: Products[]
    }>({
      query: (payload) => ({
          url: `carts`,
          method: 'POST',
          body: payload,
      }),
      invalidatesTags: ["CART_LIST"],
    }),
    updateCart: builder.mutation<any, {
      userId: number,
      date: string,
      products: Products[]
    }>({
      query: (payload) => ({
          url: `carts`,
          method: 'PUT',
          body: payload,
      }),
      invalidatesTags: ["CART_LIST"],
    }),
  }),
  tagTypes: ["CART_LIST"]
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllProductCategoriesQuery,
  useGetAllProductsQuery,
  useGetDetailProductQuery,
  useGetAllCartsQuery,
  useAddNewCartMutation,
  useUpdateCartMutation
} = fakeStoreApi