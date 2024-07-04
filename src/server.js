/*importando a constate app, que é a instancia do express, do arquivo app.js
E não esqueça de adicionar o script : "type": "module", no package.json
Agora, este arquivo "server.js" vai conter o código para subir o nosso servidor,
assim, temos que mudar também o script do rodemon para: "dev": "nodemon server.js"
*/
import app from './app.js'


//definindo uma porta lógica para nosso projeto
//o "process.env.PORT" indica que a constante pode ser uma outra porta passada pelo serviço de hospedagem
const PORT = process.env.PORT || 3000


//escutar a porta lógica 3000
app.listen(PORT, () => {
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`)
})
