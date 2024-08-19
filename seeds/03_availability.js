// seeds/03_availability.js

export const seed = async (knex) => {
  // Deletes ALL existing entries
  await knex("availability").del();

  // Inserts seed entries with time in 12-hour format
  const availability = [
    {
      date: "2024-08-20",
      time: "07:00 PM",
      available_tables: 10,
      status: "available",
    },
    {
      date: "2024-08-20",
      time: "08:00 PM",
      available_tables: 5,
      status: "available",
    },
    {
      date: "2024-08-21",
      time: "06:30 PM",
      available_tables: 0,
      status: "unavailable",
    },
    {
      date: "2024-08-21",
      time: "07:00 PM",
      available_tables: 2,
      status: "available",
    },
    {
      date: "2024-08-22",
      time: "06:30 PM",
      available_tables: 7,
      status: "available",
    },
    {
      date: "2024-08-23",
      time: "07:00 PM",
      available_tables: 4,
      status: "available",
    },
    {
      date: "2024-08-24",
      time: "08:00 PM",
      available_tables: 3,
      status: "available",
    },
    {
      date: "2024-08-25",
      time: "05:30 PM",
      available_tables: 8,
      status: "available",
    },
    {
      date: "2024-08-26",
      time: "08:00 PM",
      available_tables: 5,
      status: "available",
    },
    {
      date: "2024-08-27",
      time: "06:00 PM",
      available_tables: 10,
      status: "available",
    },
  ];

  await knex("availability").insert(availability);
};
