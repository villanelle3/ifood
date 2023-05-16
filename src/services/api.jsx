import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const restaurantsApi = createApi({
    reducerPath: 'restaurantsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://my-json-server.typicode.com/villanelle3/restaurantAPI/restaurantes' }),
    endpoints: (builder) => ({
        getName: builder.query({
        query: (name) => `restaurants/${name}`,
        }),
    }),
})

  // Export hooks for usage in functional components, which are
  // auto-generated based on the defined endpoints
export const { useGetNameQuery } = restaurantsApi
