// migrations/[timestamp]_create_users_table.js

export const up = async (knex) => {
  await knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("email").notNullable().unique();
    table.string("phone").notNullable();
  });
};

export const down = async (knex) => {
  await knex.schema.dropTable("users");
};
