const {Pool} = require("pg")

const pool = new Pool({
    user: "postgres",
    password: "postgres",
    host: "127.0.0.1",
    port: 5432,
    database:"airlines"
})

module.exports = pool
