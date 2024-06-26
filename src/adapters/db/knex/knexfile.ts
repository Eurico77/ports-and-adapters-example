import dotenv from 'dotenv';
dotenv.config();
import type { Knex } from 'knex';

const knexConfig: Knex.Config = {
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

export default knexConfig;
