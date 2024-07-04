//importando express atraves do require: const express = require('express')
//Agora vamos importar o express do express par depois expor:
import express from 'express'
import routes from './routes.js'


//criando uma instancia do express nessa constante
const app = express()


/*
Estamos indicando que o express precisa fazer a leitura do json 
caso ele esteja no corpo (body) de uma requisição
*/
app.use(express.json())


//usar o router
app.use(routes)


/*
Exportantando por padrão a nossa constante app para 
que ela seja importada por outros arquivos.
Agora, este arquivo "app.js" vai conter o código das rotas.
*/
export default app
