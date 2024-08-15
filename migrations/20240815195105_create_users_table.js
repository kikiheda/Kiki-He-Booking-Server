// migrations/[timestamp]_create_users_table.js

export const up = async function (knex) {
  await knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("email").notNullable().unique();
    table.string("phone").notNullable();
    table.timestamps(true, true);
  });
};

export const down = async function (knex) {
  await knex.schema.dropTable("users");
};
