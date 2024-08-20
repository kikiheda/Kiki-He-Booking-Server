// migrations/[timestamp]_create_users_reservations_availability_tables.js

export const up = async (knex) => {
  // Create Users Table
  await knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("userId").unique().notNullable();
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
    table.integer("reservationId").unsigned().notNullable();
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

  // generate user_id
  const users = await knex("users").select("id");

  for (const user of users) {
    const userId = Math.floor(100 + Math.random() * 900).toString();
    await knex("users")
      .where({ id: user.id }) // Primary key
      .update({ userId });
  }

  // Generate reservation_id
  const reservations = await knex("reservations").select("id");

  for (const reservation of reservations) {
    const reservationId = Math.floor(
      100000 + Math.random() * 900000
    ).toString();
    await knex("reservations")
      .where({ id: reservation.id })
      .update({ reservationId });
  }
};

export const down = async (knex) => {
  await knex.schema.dropTable("availability");
  await knex.schema.dropTable("reservations");
  await knex.schema.dropTable("users");
};
