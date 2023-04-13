import { initTRPC } from "@trpc/server";
import { db, entity } from "./db";
import { z } from "zod";

export const t = initTRPC.create();

export const appRouter = t.router({
  listEntities: t.procedure.query(async () => {
    return await db.select().from(entity);
  }),

  createEntity: t.procedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      await db.insert(entity).values({ name: input.name });
    }),
});

export type AppRouter = typeof appRouter;
