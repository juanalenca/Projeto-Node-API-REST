import {Router} from 'express'
import SelecaoController from './app/controllers/SelecaoController.js'


const router = Router()


//ROTAS
router.get('/selecoes', SelecaoController.index)


//buscar selecao pior id -> '/selecoes/:id', onde '/selecoes/:parâmetro'
//Logo, o id é o parâmetro dentro dessa requisição
router.get('/selecoes/:id', SelecaoController.show)


//Método post serve par criar novos dados
router.post('/selecoes', SelecaoController.store)


//utilize o id, se não tudo será apagado
router.delete('/selecoes/:id', SelecaoController.delete)


//método put serve para atualizar dados
router.put('/selecoes/:id', SelecaoController.update)


export default router
