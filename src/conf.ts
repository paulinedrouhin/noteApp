const mysql = require ('mysql')
require ('dotenv').config(process.cwd(), '.env')
export const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_DB,
})




