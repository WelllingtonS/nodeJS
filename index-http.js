const http = require('http')

const server = http.createServer((req, res ) => {
    res.end('<h1> Atenimento a requisiçao </h1>');
})

server.listen(3000, () =>{
    console .log('Servidor rodado na porta 3000')
})