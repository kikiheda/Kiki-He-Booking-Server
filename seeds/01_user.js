// seeds/01_users.js

export const seed = async (knex) => {
  // Deletes ALL existing entries
  await knex("users").del();

  // Inserts seed entries
  const users = [
    { name: "John Doe", email: "john.doe@example.com", phone: "123-456-7890" },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "098-765-4321",
    },
    {
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      phone: "555-555-5555",
    },
    {
      name: "Bob Brown",
      email: "bob.brown@example.com",
      phone: "111-222-3333",
    },
    {
      name: "Carol White",
      email: "carol.white@example.com",
      phone: "444-555-6666",
    },
    {
      name: "Dave Black",
      email: "dave.black@example.com",
      phone: "777-888-9999",
    },
    {
      name: "Eve Green",
      email: "eve.green@example.com",
      phone: "222-333-4444",
    },
    {
      name: "Frank Blue",
      email: "frank.blue@example.com",
      phone: "333-444-5555",
    },
    {
      name: "Grace Red",
      email: "grace.red@example.com",
      phone: "666-777-8888",
    },
    {
      name: "Hank Yellow",
      email: "hank.yellow@example.com",
      phone: "999-000-1111",
    },
  ];

  await knex("users").insert(users);
};
