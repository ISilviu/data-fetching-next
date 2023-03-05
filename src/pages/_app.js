import "@/styles/globals.css";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "../request/config/queryClient";

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
