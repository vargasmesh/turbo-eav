import { initTRPC } from "@trpc/server";
import { db, entity } from "./db";

export const t = initTRPC.create();

export const appRouter = t.router({
  listEntities: t.procedure.query(async () => {
    return await db.select().from(entity);
  }),
});

export type AppRouter = typeof appRouter;
