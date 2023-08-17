import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
  const rapidKey = import.meta.env.VITE_RAPIDAPI_ARTICLES_KEY;
export const articleApi = createApi({
    reducerPath:'articleApi',
    baseQuery: fetchBaseQuery({ baseUrl:'https://article-extractor-and-summarizer.p.rapidapi.com/'}),
    prepareHeaders:(headers)=>{
     headers.set('X-RapidAPI-Key',rapidKey),
     headers.set('X-RapidAPI-Host','article-extractor-and-summarizer.p.rapidapi.com')
     return headers;
    },
    endpoints: (builder) => ({
      getsummeri: builder.query({
        query: (params) => 'test',
      }),
    }),
});