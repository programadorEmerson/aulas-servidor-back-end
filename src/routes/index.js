import { Router } from 'express';
import { getAll, createUser } from '../controllers/usuario.controller';

const routes = new Router();

routes.get('/', (req, res) => {
  res.status(200).json({ ok: 'conected' });
});

routes.get('/usuario', getAll);

routes.post('/usuario', createUser);

export default routes;
