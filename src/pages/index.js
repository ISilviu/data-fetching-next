import { useQuery } from "@tanstack/react-query";
import React from "react";

export default function Home() {
  const { data, isLoading } = useQuery(["/hello"]);

  return isLoading ? (
    <p>Data is fetching ...</p>
  ) : (
    <>
      <h1>Movies List</h1>
      {JSON.stringify(data)}
    </>
  );
}
