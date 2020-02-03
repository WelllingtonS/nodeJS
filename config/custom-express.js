const express = require('express')
const app = express()
const consign = require('consign')

customExpress = () =>{
    consign()
    .include('controllers')
    .include('models')
    .into(app)

    return app

}



module.exports = customExpress()
