import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";

const API = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ebac-fake-api.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getAllRestaurant: builder.query<IRestaurant[], void>({
      query: () => '/restaurantes'
    }),
    getResturantById: builder.query<IRestaurant, string>({
      query: (id) => `restaurantes/${id}`
    }),
  })
});

export const { useGetAllRestaurantQuery, useGetResturantByIdQuery } = API;
export default API;
