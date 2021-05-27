import { Router } from 'express';
import HandleDB from './controllers/HandleDB';

const routes = new Router();

routes.get('/', HandleDB.getDados);
routes.put('/', HandleDB.updateDados);
routes.post('/', HandleDB.createDados);
routes.delete('/', HandleDB.deleteDados);

export default routes;
