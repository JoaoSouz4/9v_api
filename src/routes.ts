import { Router } from 'express';
import PedalController from './controllers/pedalController';

const routes = Router();

routes.get('/', (req: any, res: any)=> res.status(200).json({message: 'inital route'}));
routes.post('/insertpedal', PedalController.createPedal);
routes.get('/getallpedals', PedalController.getAllPedals);

export default routes;