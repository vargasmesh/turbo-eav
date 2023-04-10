import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "api/src/trpc";
import { httpBatchLink } from "@trpc/client";
import { QueryClient } from "@tanstack/react-query";

const trpc = createTRPCReact<AppRouter>();

const queryClient = new QueryClient();

const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: "http://localhost:3000",
    }),
  ],
});

export { trpcClient, queryClient, trpc };
