import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  Card,
  ExpenseStatistics,
  MyContact,
  Transection,
  WeeklyActivity,
} from "../types";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "/",
    timeout: 10000,
  }),
  endpoints: (builder) => ({
    getCards: builder.query<Card[], void>({
      query: () => ({
        url: "/api-mockdata/cardList.json",
        validateStatus: (response, result) =>
          response.status === 200 && Boolean(result),
      }),
    }),
    getRecentTransection: builder.query<Transection[], void>({
      query: () => ({
        url: "/api-mockdata/recentTransection.json",
        validateStatus: (response, result) =>
          response.status === 200 && Boolean(result),
      }),
    }),
    getWeeklyActivity: builder.query<WeeklyActivity[], void>({
      query: () => ({
        url: "/api-mockdata/weeklyTransaction.json",
        validateStatus: (response, result) =>
          response.status === 200 && Boolean(result),
      }),
    }),
    getExpenseStatistics: builder.query<ExpenseStatistics[], void>({
      query: () => ({
        url: "/api-mockdata/expenses.json",
        validateStatus: (response, result) =>
          response.status === 200 && Boolean(result),
      }),
    }),
    getMyContacts: builder.query<MyContact[], void>({
      query: () => ({
        url: "/api-mockdata/myContacts.json",
        validateStatus: (response, result) =>
          response.status === 200 && Boolean(result),
      }),
    }),
  }),
});

export const {
  useGetCardsQuery,
  useGetRecentTransectionQuery,
  useGetWeeklyActivityQuery,
  useGetExpenseStatisticsQuery,
  useGetMyContactsQuery,
} = api;
