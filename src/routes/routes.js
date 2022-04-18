import express from 'express';
import { getIndex, getAdmin, getAddProdutos, getEditarProduto, getDeletar, postAddProduto, postEditar, getDetalhes} from '../controller/RestauranteController.js';

export const routes = express.Router();

routes.get('/', getIndex);

routes.get('/admin', getAdmin);

routes.get('/add-produtos', getAddProdutos);
routes.post('/add-produto', postAddProduto);

routes.get('/editar-produto/:id', getEditarProduto);
routes.post('/editar/:id', postEditar)
 .get('/deletar/:id', getDeletar);

routes.get('/detalhes/:id', getDetalhes);