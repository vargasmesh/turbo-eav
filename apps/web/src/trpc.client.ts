import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "api";

const client = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000",
    }),
  ],
});

export { client };
