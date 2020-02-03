const usuarios = (app) => {
    
    

    app.get('/', (req, res) => {
        res.send('Root Rote')
    })

    app.get('/usuarios', (req, res) => {
        const UsuarioDAO = app.models.Usuarios
        
        UsuarioDAO.lista()
            .then(lista => {
                res.send(lista)
            })
            .catch(erro => {
                console.log(erro)
                res.status(500).send(erro)
            })
    })

    app.post('/usuarios', (req, res) => {
        let usuario = req.body

        console.log(usuario)
    })
}
module.exports = usuarios