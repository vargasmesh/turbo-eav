import { initTRPC } from "@trpc/server";

export const t = initTRPC.create();

export const appRouter = t.router({
  helloWolrd: t.procedure.query(() => {
    return "Hello World!";
  }),
});

export type AppRouter = typeof appRouter;