// 
import React from "react";
import { Inter } from "next/font/google";
import axios from "../request/config/axios";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axios.get("/hello").then((response) => {
      if (response.data) {
        setData(response.data);
      }
    });
  }, []);

  return (
    <>
      <h1>Movies List</h1>
      {JSON.stringify(data)}
    </>
  );
}
