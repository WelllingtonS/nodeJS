const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: '54.89.207.70',
    port:3306,
    user:'wellington',
    password:'bcd127',
    database:'brabank'
})

module.exports = conexao