import { QueryClient } from "@tanstack/react-query";
import axiosInstance from "./axios";

const pathSeparator = "/";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: ({ queryKey }) =>
        axiosInstance
          .get(queryKey.join(pathSeparator))
          .then(({ data }) => data),
    },
  },
});

export default queryClient;
