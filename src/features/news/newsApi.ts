import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<any[], void>({
      query: () => "posts",
    }),
    getPostById: builder.query<any, number>({
      query: (id) => `posts/${id}`,
    }),
    getUserById: builder.query<any, number>({
      query: (id) => `users/${id}`,
    }),
  }),
});

export const { useGetPostsQuery, useGetPostByIdQuery, useGetUserByIdQuery } =
  api;
