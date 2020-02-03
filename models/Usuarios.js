const conexao = require('../config/conexao-db')

class Usuarios {
     
    lista(){
        return new Promise((resolve, reject) => {
            const sql = ' SELECT * FROM usuario '

            conexao.query(sql, (erro, retorno) => {
                if(erro){
                    reject('Erro ao consultar: ' + erro)
                    return
                } 
                console.log('constultado com sucesso')
                resolve(retorno)
            })
        })
    } 

    

}
module.exports = new Usuarios()