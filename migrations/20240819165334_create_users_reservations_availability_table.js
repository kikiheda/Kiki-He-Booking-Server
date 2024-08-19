// migrations/[timestamp]_create_users_reservations_availability_tables.js

export const up = async (knex) => {
  // Create Users Table
  await knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("email").unique().notNullable();
    table.string("phone").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now()).notNullable();
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"))
      .notNullable();
  });

  // Create Reservations Table
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
    table.string("time").notNullable(); // Store time as a string
    table.integer("party_size").notNullable();
    table
      .enu("status", ["pending", "confirmed", "canceled"])
      .defaultTo("confirmed");
    table.timestamp("created_at").defaultTo(knex.fn.now()).notNullable();
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"))
      .notNullable();
  });

  // Create Availability Table
  await knex.schema.createTable("availability", (table) => {
    table.increments("id").primary();
    table.date("date").notNullable();
    table.string("time").notNullable(); // Store time as a string
    table.integer("available_tables").notNullable();
    table.enu("status", ["available", "unavailable"]).defaultTo("available");
    table.timestamp("created_at").defaultTo(knex.fn.now()).notNullable();
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"))
      .notNullable();
  });
};

export const down = async (knex) => {
  await knex.schema.dropTable("availability");
  await knex.schema.dropTable("reservations");
  await knex.schema.dropTable("users");
};
