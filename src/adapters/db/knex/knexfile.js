module.exports = {
  client: 'pg',
  connection: 'postgres://postgres:root@localhost:5432/ports_adapters',
  migrations: {
    tableName: 'knex_migrations',
  },
  pool: {
    min: 2,
    max: 10,
  },
};
