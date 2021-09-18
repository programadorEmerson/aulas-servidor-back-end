import { Router } from 'express';
import VerififyToken from '../middleware/usuarios.middleware';
import { requestLogin } from '../models/usuario.model';
import {
  getAll, createUser, deleteUser, updateUser,
} from '../controllers/usuario.controller';

const routes = new Router();

routes.get('/', (req, res) => {
  res.status(200).json({ ok: 'conected' });
});

routes.get('/usuario', VerififyToken, getAll);

routes.get('/login', requestLogin);

routes.post('/usuario', VerififyToken, createUser);

routes.delete('/usuario/:id', VerififyToken, deleteUser);

routes.put('/usuario/:id', VerififyToken, updateUser);

export default routes;
