// seeds/02_reservations.js

export const seed = async (knex) => {
  // Deletes ALL existing entries
  await knex("reservations").del();

  // Fetch all users and create a map with name
  const users = await knex("users").select("id", "name");

  const userMap = {};
  users.forEach((user) => {
    userMap[user.name] = user.id; // Map user name to id
  });

  console.log(userMap);

  
  const reservations = [
    {
      user_id: userMap["John Doe"], 
      reservationId: Math.floor(100000 + Math.random() * 900000),
      name: "John Doe",
      date: "2024-08-20",
      time: "07:00 PM",
      party_size: 4,
      status: "confirmed",
    },
    {
      user_id: userMap["John Doe"], 
      reservationId: Math.floor(100000 + Math.random() * 900000),
      name: "John Doe",
      date: "2024-08-21",
      time: "08:00 PM",
      party_size: 2,
      status: "pending",
    },
    {
      user_id: userMap["Jane Smith"], // Correctly mapped to Jane Smith's id
      reservationId: Math.floor(100000 + Math.random() * 900000),
      name: "Jane Smith",
      date: "2024-08-22",
      time: "07:00 PM",
      party_size: 3,
      status: "confirmed",
    },
    {
      user_id: userMap["Jane Smith"], // Correctly mapped to Jane Smith's id
      reservationId: Math.floor(100000 + Math.random() * 900000),
      name: "Jane Smith",
      date: "2024-08-23",
      time: "06:30 PM",
      party_size: 6,
      status: "canceled",
    },
    {
      user_id: userMap["Alice Johnson"], // Correctly mapped to Alice Johnson's id
      reservationId: Math.floor(100000 + Math.random() * 900000),
      name: "Alice Johnson",
      date: "2024-08-24",
      time: "07:00 PM",
      party_size: 4,
      status: "confirmed",
    },
    {
      user_id: userMap["Alice Johnson"], // Correctly mapped to Alice Johnson's id
      reservationId: Math.floor(100000 + Math.random() * 900000),
      name: "Alice Johnson",
      date: "2024-08-25",
      time: "08:00 PM",
      party_size: 2,
      status: "pending",
    },
    {
      user_id: userMap["Bob Brown"], // Correctly mapped to Bob Brown's id
      reservationId: Math.floor(100000 + Math.random() * 900000),
      name: "Bob Brown",
      date: "2024-08-26",
      time: "06:00 PM",
      party_size: 5,
      status: "confirmed",
    },
    {
      user_id: userMap["Bob Brown"], // Correctly mapped to Bob Brown's id
      reservationId: Math.floor(100000 + Math.random() * 900000),
      name: "Bob Brown",
      date: "2024-08-27",
      time: "09:00 PM",
      party_size: 2,
      status: "pending",
    },
    {
      user_id: userMap["Carol White"], // Correctly mapped to Carol White's id
      reservationId: Math.floor(100000 + Math.random() * 900000),
      name: "Carol White",
      date: "2024-08-28",
      time: "05:30 PM",
      party_size: 4,
      status: "confirmed",
    },
    {
      user_id: userMap["Dave Black"], // Correctly mapped to Dave Black's id
      reservationId: Math.floor(100000 + Math.random() * 900000),
      name: "Dave Black",
      date: "2024-08-21",
      time: "07:00 PM",
      party_size: 2,
      status: "canceled",
    },
    {
      user_id: userMap["Eve Green"], // Correctly mapped to Eve Green's id
      reservationId: Math.floor(100000 + Math.random() * 900000),
      name: "Eve Green",
      date: "2024-08-22",
      time: "06:30 PM",
      party_size: 3,
      status: "confirmed",
    },
    {
      user_id: userMap["Eve Green"], // Correctly mapped to Eve Green's id
      reservationId: Math.floor(100000 + Math.random() * 900000),
      name: "Eve Green",
      date: "2024-08-23",
      time: "08:00 PM",
      party_size: 5,
      status: "pending",
    },
    {
      user_id: userMap["Frank Blue"], // Correctly mapped to Frank Blue's id
      reservationId: Math.floor(100000 + Math.random() * 900000),
      name: "Frank Blue",
      date: "2024-08-24",
      time: "07:30 PM",
      party_size: 4,
      status: "confirmed",
    },
    {
      user_id: userMap["Frank Blue"], // Correctly mapped to Frank Blue's id
      reservationId: Math.floor(100000 + Math.random() * 900000),
      name: "Frank Blue",
      date: "2024-08-25",
      time: "09:00 PM",
      party_size: 2,
      status: "canceled",
    },
    {
      user_id: userMap["Grace Red"], // Correctly mapped to Grace Red's id
      reservationId: Math.floor(100000 + Math.random() * 900000),
      name: "Grace Red",
      date: "2024-08-26",
      time: "05:30 PM",
      party_size: 3,
      status: "confirmed",
    },
    {
      user_id: userMap["Grace Red"], // Correctly mapped to Grace Red's id
      reservationId: Math.floor(100000 + Math.random() * 900000),
      name: "Grace Red",
      date: "2024-08-27",
      time: "07:00 PM",
      party_size: 4,
      status: "pending",
    },
    {
      user_id: userMap["Hank Yellow"], // Correctly mapped to Hank Yellow's id
      reservationId: Math.floor(100000 + Math.random() * 900000),
      name: "Hank Yellow",
      date: "2024-08-28",
      time: "06:00 PM",
      party_size: 5,
      status: "confirmed",
    },
    {
      user_id: userMap["Hank Yellow"], // Correctly mapped to Hank Yellow's id
      reservationId: Math.floor(100000 + Math.random() * 900000),
      name: "Hank Yellow",
      date: "2024-08-29",
      time: "08:00 PM",
      party_size: 6,
      status: "confirmed",
    },
  ];

  await knex("reservations").insert(reservations);
};
