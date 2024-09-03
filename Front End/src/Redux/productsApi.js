
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://react-online-store-lscm.onrender.com/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `products`,
    }),
  }),
})

export const oneproductApi = createApi({
  reducerPath: 'oneproductApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://react-online-store-lscm.onrender.com/' }),
  endpoints: (builder) => ({
    getoneproduct: builder.query({
      query: (name) => `products/${name}`,
    }),
  }),
})

export const { useGetPokemonByNameQuery } = productsApi
export const { useGetoneproductQuery } = oneproductApi