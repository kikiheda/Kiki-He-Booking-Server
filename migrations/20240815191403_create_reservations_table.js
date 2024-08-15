// migrations/[timestamp]_create_reservations_table.js

export const up = async function (knex) {
  await knex.schema.createTable("reservations", (table) => {
    table.increments("id").primary();
    table
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
    table.string("name").notNullable(); // New name column
    table.date("date").notNullable();
    table.time("time").notNullable();
    table.integer("party_size").notNullable();
    table.string("status").notNullable().defaultTo("active");
    table.timestamps(true, true);
  });
};

export const down = async function (knex) {
  await knex.schema.dropTable("reservations");
};
