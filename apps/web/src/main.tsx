import { render } from "preact";
import { App } from "./app";
import { queryClient, trpc, trpcClient } from "./trpc";
import { QueryClientProvider } from "@tanstack/react-query";
import "./index.css";

render(
  <trpc.Provider client={trpcClient} queryClient={queryClient}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </trpc.Provider>,
  document.getElementById("app") as HTMLElement
);
