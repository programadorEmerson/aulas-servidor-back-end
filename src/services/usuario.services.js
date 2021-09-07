import { getAll } from '../models/usuario.model';

const todos = async () => {
  const users = await getAll();
  return users;
};

const login = async () => null;

export { todos, login };
