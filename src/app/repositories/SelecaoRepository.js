//para importar um elemento, é preciso colocá-lo entre chaves
import { consulta } from "../database/conexao.js"

class SelecaoRepository {

    //Metodos CRUD
    create(selecao){
        
        //instrução sql -> INSERT INTO selecoes (colunas) VALUES (valores);
        //"SET" == configurar/configurações
        //"?" == conjunto (colunas e valores) de dados passados no body da requisições
        const sql = "INSERT INTO selecoes SET ?;"
    
        return consulta(sql, selecao, "Não foi possível cadastrar.")
        
    }

    findAll() {
        const sql = "SELECT * FROM selecoes;"
        return consulta(sql, "Não foi possível localizar.")
    }

    findById(id) {
        const sql = "SELECT * FROM selecoes WHERE id = ?;"
        return consulta(sql, id, "Não foi possível localizar.")
    }

    update(selecao, id){

        /*
        Vamos fazer um update na tabela selecoes setando 
        os valores/dados quando o id for igual a o id que 
        esta sendo passado.
        */
        const sql = "UPDATE selecoes SET ? WHERE id = ?;"
    
        return consulta(sql, [selecao, id], "Não foi possível atualizar.")

    }

    delete(id){
        const sql = "DELETE FROM selecoes WHERE id = ?;"
        return consulta(sql, id, "Não foi possível apagar.")
    }

}


export default new SelecaoRepository()
