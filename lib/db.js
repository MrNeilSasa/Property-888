const { Pool } = require("pg");
require("dotenv").config();

const dbuser = String(process.env.DATABASE_USER);
const dbpassword = String(process.env.DATABASE_PASSWORD);
const dbhost = String(process.env.DATABASE_HOST);

//FOR LOCAL HOST
const pool = new Pool({
  user: dbuser,
  host: "localhost",
  database: "property888",
  password: dbpassword,
  port: 5432,
});

/*
const pool = new Pool({
    user: dbuser,
    host: dbhost,
    database: 'property888',
    password: dbpassword,
    port: 5432,
    // Add this line for SSL/TLS encryption:
    ssl: {
      rejectUnauthorized: false, // Set to true if you have custom CA certificates
    },
  }); */

export default pool;
