// migrations/[timestamp]_create_reservations_table.js
export const up = async (knex) => {
  await knex.schema.createTable("reservations", (table) => {
    table.increments("id").primary();
    table.integer("user_id").unsigned().notNullable();
    table
      .foreign("user_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
    table.string("name").notNullable();
    table.date("date").notNullable();
    table.time("time").notNullable();
    table.integer("party_size").notNullable();
    table
      .enu("status", ["pending", "confirmed", "canceled"])
      .defaultTo("pending");
    table.integer("tables_required").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now()).notNullable();
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"))
      .notNullable();
  });
};

export const down = async (knex) => {
  await knex.schema.dropTable("reservations");
};
