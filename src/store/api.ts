import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  Card,
  ExpenseStatistics,
  MyContact,
  Profile,
  Transection,
  WeeklyActivity,
} from "../types";

const apisUrl = {
  getCards: "/api-mockdata/cardList.json",
  getRecentTransection: "/api-mockdata/recentTransection.json",
  getWeeklyActivity: "/api-mockdata/weeklyTransaction.json",
  getExpenseStatistics: "/api-mockdata/expenses.json",
  getMyContacts: "/api-mockdata/myContacts.json",
  getProfile: "/api-mockdata/profile.json",
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "/",
    timeout: 10000,
  }),
  endpoints: (builder) => ({
    getCards: builder.query<Card[], void>({
      query: () => ({
        url: apisUrl.getCards,
        validateStatus: (response, result) =>
          response.status === 200 && Boolean(result),
      }),
    }),
    getRecentTransection: builder.query<Transection[], void>({
      query: () => ({
        url: apisUrl.getRecentTransection,
        validateStatus: (response, result) =>
          response.status === 200 && Boolean(result),
      }),
    }),
    getWeeklyActivity: builder.query<WeeklyActivity[], void>({
      query: () => ({
        url: apisUrl.getWeeklyActivity,
        validateStatus: (response, result) =>
          response.status === 200 && Boolean(result),
      }),
    }),
    getExpenseStatistics: builder.query<ExpenseStatistics[], void>({
      query: () => ({
        url: apisUrl.getExpenseStatistics,
        validateStatus: (response, result) =>
          response.status === 200 && Boolean(result),
      }),
    }),
    getMyContacts: builder.query<MyContact[], void>({
      query: () => ({
        url: apisUrl.getMyContacts,
        validateStatus: (response, result) =>
          response.status === 200 && Boolean(result),
      }),
    }),
    getProfile: builder.query<Profile, void>({
      query: () => ({
        url: apisUrl.getProfile,
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
  useGetProfileQuery,
} = api;
