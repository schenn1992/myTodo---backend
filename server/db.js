const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "Xs455742",
  host: "localhost",
  port: 5432,
  database: "perntodo"
})

module.exports = pool; 


