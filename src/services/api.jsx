import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const restaurantsApi = createApi({
    reducerPath: 'restaurantsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fake-api-tau.vercel.app/api/efood/' }),
    endpoints: (builder) => ({
        getName: builder.query({
        query: (name) => `restaurants/${name}`,
        }),
        purchase: builder.mutation({
          query: (body) => ({
            url: 'checkout',
            method: 'POST', 
            body,
          }),
        })
    }),
})

  // Export hooks for usage in functional components, which are
  // auto-generated based on the defined endpoints
export const { useGetNameQuery, usePurchaseMutation } = restaurantsApi
