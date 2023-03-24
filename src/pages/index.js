import React from "react";
import axiosInstance from "../request/config/axios";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";

const getMovies = () => axiosInstance.get("/hello").then(({ data }) => data);
const moviesQueryKey = ["movies"];

export default function Home() {
  const { data } = useQuery(moviesQueryKey, getMovies);

  return (
    <>
      <h1>Movies List</h1>
      {data.map(({ id, title }) => (
        <h2 key={id}>{title}</h2>
      ))}
    </>
  );
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(moviesQueryKey, getMovies);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
