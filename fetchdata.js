const { Client } = require("pg");

// PostgreSQL client setup
const client = new Client({
  user: "your_username",
  host: "your_host",
  database: "your_database",
  password: "your_password",
  port: 5432, // default PostgreSQL port
});

client.connect();

/**
 * Fetches user data from the PostgreSQL database.
 * @param {number} userId - The ID of the user whose data is to be fetched.
 * @returns {Object} - An object containing the user's name and location.
 */
const fetchUserData = async (userId) => {
  try {
    const res = await client.query(
      "SELECT name, location FROM users WHERE user_id = $1",
      [userId]
    );
    const data = res.rows[0];
    return data;
  } catch (err) {
    console.error("Error fetching user data:", err);
  } finally {
    client.end();
  }
};

module.exports = { fetchUserData };
