import { index, pgTable, serial, text } from "drizzle-orm/pg-core";

export const entity = pgTable("entity", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
});

export const attribute = pgTable("attribute", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
});

export const entityAttributeValue = pgTable(
  "entity_attribute_value",
  {
    id: serial("id").primaryKey(),
    entity_id: serial("entity_id").references(() => entity.id),
    attribute_id: serial("attribute_id").references(() => attribute.id),
    value: text("value").notNull(),
  },
  (table) => {
    return {
      eavIdx: index("eav_idx").on(
        table.entity_id,
        table.attribute_id,
        table.value
      ),
      aevIdx: index("aev_idx").on(
        table.attribute_id,
        table.entity_id,
        table.value
      ),
      aveIdx: index("ave_idx").on(
        table.attribute_id,
        table.value,
        table.entity_id
      ),
    };
  }
);
