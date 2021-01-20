const mysql = require('mysql2/promise')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'crud_mysql',
})

pool.getConnection()
    .then((connection) => {
        console.log('Database is connected')
    })
    .catch((err) => console.log('Hubo un herro', err))

module.exports = pool
