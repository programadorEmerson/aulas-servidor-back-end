import {
  getAll, newUser, userExists,
} from '../models/usuario.model';

const todos = async () => {
  const users = await getAll();
  return users;
};

const criar = async ({ email, senha }) => {
  const usuario = await userExists({ email });

  if (usuario) return usuario;

  const user = await newUser({ email, senha });
  return user;
};

const login = async () => null;

export {
  todos, login, criar,
};
