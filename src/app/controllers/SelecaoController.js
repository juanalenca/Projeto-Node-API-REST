//"../" == voltar uma pasta
import SelecaoRepository from "../repositories/SelecaoRepository.js"

//Nessa classe temos esses métodos, que cotêm toda a regra de negócio para a implementação das funções
class SelecaoController {

    //lista tudo, de maneira assíncrona, aguardando a resposta para ter integridade
    async index(req, res) {
        const rowResult = await SelecaoRepository.findAll()
        res.json(rowResult)
    }

    //lista tudo por id
    async show(req, res) {
        const id = req.params.id
        const rowResult = await SelecaoRepository.findById(id)
        res.json(rowResult)
    }

    //cria dados
    async store(req, res) {
        const selecao = req.body
        const rowResult = await SelecaoRepository.create(selecao)
        res.json(rowResult)
    }

    //atualiza dados
    async update(req, res) {
        const selecao = req.body
        const id = req.params.id
        const rowResult = await SelecaoRepository.update(selecao, id)
        res.json(rowResult)
    }

    //apaga dados
    async delete(req, res) {
        const id = req.params.id
        const rowResult = await SelecaoRepository.delete(id)
        res.json(rowResult)
    }

}

//Padrão Singleton: usaremos uma unica instacia da classe para a aplicação toda
export default new SelecaoController()
