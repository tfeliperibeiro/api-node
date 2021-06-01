import { Router } from 'express';
import HandleDB from './controllers/HandleDB';

const routes = new Router();

routes.get('/buscar', HandleDB.getDados);
routes.put('/atualizar/:id', HandleDB.updateDados);
routes.post('/criar', HandleDB.createDados);
routes.delete('/deletar/:id', HandleDB.deleteDados);

export default routes;
