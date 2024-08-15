// seeds/01_users.js

export const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();

  // Inserts seed entries
  await knex("users").insert([
    {
      id: 1,
      name: "Alice Smith",
      email: "alice@gmail.com",
      phone: "123-456-7890",
    },
    {
      id: 2,
      name: "Bob Johnson",
      email: "bob@yahoo.com",
      phone: "234-567-8901",
    },
    {
      id: 3,
      name: "Charlie Brown",
      email: "charlie@hotmail.com",
      phone: "345-678-9012",
    },
    {
      id: 4,
      name: "David Williams",
      email: "david@outlook.com",
      phone: "456-789-0123",
    },
    {
      id: 5,
      name: "Eva Davis",
      email: "eva@icloud.com",
      phone: "567-890-1234",
    },
    {
      id: 6,
      name: "Frank Miller",
      email: "frank@protonmail.com",
      phone: "678-901-2345",
    },
    {
      id: 7,
      name: "Grace Lee",
      email: "grace@live.com",
      phone: "789-012-3456",
    },
    {
      id: 8,
      name: "Henry Clark",
      email: "henry@zoho.com",
      phone: "890-123-4567",
    },
    {
      id: 9,
      name: "Isabel Martinez",
      email: "isabel@mail.com",
      phone: "901-234-5678",
    },
    {
      id: 10,
      name: "Jack Wilson",
      email: "jack@gmx.com",
      phone: "012-345-6789",
    },
  ]);
};
