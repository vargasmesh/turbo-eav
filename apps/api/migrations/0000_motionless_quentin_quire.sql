CREATE TABLE IF NOT EXISTS "attribute" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text
);

CREATE TABLE IF NOT EXISTS "entity" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text
);

CREATE TABLE IF NOT EXISTS "entity_attribute_value" (
	"id" serial PRIMARY KEY NOT NULL,
	"entity_id" serial NOT NULL,
	"attribute_id" serial NOT NULL,
	"value" text
);

DO $$ BEGIN
 ALTER TABLE "entity_attribute_value" ADD CONSTRAINT "entity_attribute_value_entity_id_entity_id_fk" FOREIGN KEY ("entity_id") REFERENCES "entity"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "entity_attribute_value" ADD CONSTRAINT "entity_attribute_value_attribute_id_attribute_id_fk" FOREIGN KEY ("attribute_id") REFERENCES "attribute"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

CREATE INDEX IF NOT EXISTS "eav_idx" ON "entity_attribute_value" ("entity_id","attribute_id","value");
CREATE INDEX IF NOT EXISTS "aev_idx" ON "entity_attribute_value" ("attribute_id","entity_id","value");
CREATE INDEX IF NOT EXISTS "ave_idx" ON "entity_attribute_value" ("attribute_id","value","entity_id");