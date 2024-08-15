function calculateTablesRequired(partySize) {
  return Math.ceil(partySize / 2);
}

export const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("reservations").del();

  const reservations = [
    {
      id: 1,
      user_id: 1,
      name: "Alice Smith",
      date: "2024-08-20",
      time: "18:00:00",
      party_size: 4,
      status: "confirmed",
      created_at: knex.fn.now(), // Timestamp at creation
      updated_at: knex.fn.now(), // Initially the same as created_at
    },
    {
      id: 2,
      user_id: 2,
      name: "Bob Johnson",
      date: "2024-08-21",
      time: "19:30:00",
      party_size: 2,
      status: "canceled",
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
    {
      id: 3,
      user_id: 3,
      name: "Charlie Brown",
      date: "2024-08-22",
      time: "20:00:00",
      party_size: 3,
      status: "confirmed",
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
    {
      id: 4,
      user_id: 4,
      name: "David Williams",
      date: "2024-08-23",
      time: "17:15:00",
      party_size: 6,
      status: "confirmed",
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
    {
      id: 5,
      user_id: 5,
      name: "Eva Davis",
      date: "2024-08-24",
      time: "18:45:00",
      party_size: 5,
      status: "canceled",
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
    {
      id: 6,
      user_id: 6,
      name: "Frank Miller",
      date: "2024-08-25",
      time: "19:00:00",
      party_size: 2,
      status: "confirmed",
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
    {
      id: 7,
      user_id: 7,
      name: "Grace Lee",
      date: "2024-08-26",
      time: "20:15:00",
      party_size: 4,
      status: "confirmed",
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
    {
      id: 8,
      user_id: 8,
      name: "Henry Clark",
      date: "2024-08-27",
      time: "21:00:00",
      party_size: 3,
      status: "confirmed",
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
    {
      id: 9,
      user_id: 9,
      name: "Isabel Martinez",
      date: "2024-08-28",
      time: "18:30:00",
      party_size: 2,
      status: "confirmed",
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
    {
      id: 10,
      user_id: 10,
      name: "Jack Wilson",
      date: "2024-08-29",
      time: "19:45:00",
      party_size: 6,
      status: "confirmed",
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
    {
      id: 11,
      user_id: 1,
      name: "Alice Smith",
      date: "2024-08-20",
      time: "18:15:00",
      party_size: 4,
      status: "confirmed",
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
    {
      id: 12,
      user_id: 1,
      name: "Alice Smith",
      date: "2024-08-20",
      time: "18:30:00",
      party_size: 4,
      status: "confirmed",
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
  ];

  // Calculate tables_required for each reservation dynamically
  reservations.forEach((reservation) => {
    reservation.tables_required = calculateTablesRequired(
      reservation.party_size
    );
  });

  // Inserts seed entries with dynamically calculated tables_required
  await knex("reservations").insert(reservations);
};
