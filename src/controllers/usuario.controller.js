import { todos, criar } from '../services/usuario.services';

const getAll = async (req, res) => {
  const users = await todos();
  return res.status(200).json(users);
};

const createUser = async (req, res) => {
  const { email, senha } = req.body;

  const { email: mail, _id } = await criar({ email, senha });
  return res.status(200).json({ mail, _id });
};

const login = async () => null;

export {
  getAll, login, createUser,
};
