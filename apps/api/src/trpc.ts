import { initTRPC } from "@trpc/server";
import { db, entity } from "./db";
import { z } from "zod";
import { eq, gte } from "drizzle-orm";

export const t = initTRPC.create();

export const appRouter = t.router({
  listEntities: t.procedure
    .input(
      z.object({
        limit: z.number().min(1).max(100).nullish(),
        cursor: z.number().nullish(),
      })
    )
    .query(async ({ input }) => {
      const limit = input.limit ?? 5;
      let query = db
        .select()
        .from(entity)
        .limit(limit + 1);

      if (input.cursor) {
        query = query.where(gte(entity.id, input.cursor));
      }

      const items = await query.execute();

      let nextCursor: number | undefined = undefined;
      if (items.length > limit) {
        nextCursor = items[items.length - 1].id;
        items.pop();
      }

      return { items, nextCursor };
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
