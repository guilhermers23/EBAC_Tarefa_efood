import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";

type Product = {
  id: number;
  price: number
};

type PurchasePayload = {
  products: Product[],
  delivery: {
    receiver: string,
    address: {
      description: string,
      city: string,
      zipCode: number,
      number: string,
      complement: string
    }
  },
  payment: {
    card: {
      name: string,
      number: string,
      code: number,
      expires: {
        month: number,
        year: number
      }
    }
  }
};

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
    purchase: builder.mutation<{ orderId: string }, PurchasePayload>({
      query: (body) => ({
        url: '/checkout',
        method: 'POST',
        body
      })
    }),
  })
});

export const { useGetAllRestaurantQuery, useGetResturantByIdQuery, usePurchaseMutation } = API;
export default API;
