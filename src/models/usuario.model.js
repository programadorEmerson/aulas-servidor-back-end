import connection from './mongoConnection';

const getAll = async () => {
  const db = await connection();
  return db.collection('usuarios').find().toArray();
};

const login = async () => null;

export { getAll, login };
