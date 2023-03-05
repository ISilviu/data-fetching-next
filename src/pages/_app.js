import React from "react";
import "@/styles/globals.css";
import queryClientConfiguration from "@/request/config/queryClient";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

export default function App({ Component, pageProps }) {
  const [queryClient] = React.useState(
    () => new QueryClient(queryClientConfiguration)
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}
