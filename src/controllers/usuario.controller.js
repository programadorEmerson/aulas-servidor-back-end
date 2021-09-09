import { todos, criar } from '../services/usuario.services';

const getAll = async (req, res) => {
  const users = await todos();
  return res.status(200).json(users);
};

const createUser = async (req, res) => {
  const { email, senha } = req.body;

  const user = await criar({ email, senha });
  return res.status(200).json(user);
};

const login = async () => null;

export { getAll, login, createUser };
