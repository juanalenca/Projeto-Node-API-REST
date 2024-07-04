import mysql from 'mysql2'



//constante que contem os parametros de conexão com o database
const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'bdcopa' 
})



//chamada do método conect(), que faz a conexão
conexao.connect()



/** JSDOCS
 * Executa o código sql com ou sem os valores
 * @param {string} sql -> instrução a ser executada 
 * @param {string=id | [selecao, id]} valores -> valores a serem passsados para o sql
 * @param {string} mensagem -> mensagem a ser exibida 
 * @returns -> retornar um objeto da promise
 */
export const consulta = (sql, valores='', mensagemReject) => {

    return new Promise((resolve, reject) => {

        conexao.query(sql, valores, (erro, resultado) => {

            //resolve (sucesso), reject (erro)
            if(erro){
                return reject(mensagemReject)
            }
            
            //JSON.parse() -> transforma dados recebidos de uma requisição
            //stringify() -> converte valores JS em objetos JS
            const row = JSON.parse(JSON.stringify(resultado))
            
            return resolve(row)

        })

    })

}



export default conexao

