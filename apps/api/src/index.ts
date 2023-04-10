import "dotenv/config";

import { initTRPC } from "@trpc/server";
import { createHTTPServer } from "@trpc/server/adapters/standalone";
import * as cors from "cors";

export const t = initTRPC.create();

export const appRouter = t.router({
  helloWorld: t.procedure.query(() => {
    return "Hello World!";
  }),
});

export type AppRouter = typeof appRouter;

createHTTPServer({
  middleware: cors(),
  router: appRouter,
}).listen(3000);
