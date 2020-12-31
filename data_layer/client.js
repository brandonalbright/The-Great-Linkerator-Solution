const { Client } = require("pg");

const DATABASE_URL =
  process.env.DATABASE_URL || "postgres://localhost:3000/linkerator";

const client = new Client(DATABASE_URL);

client.connect();

module.exports = client;
