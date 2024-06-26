import 'dotenv/config';
import type { Knex } from 'knex';

const knexConfig: Knex.Config = {
  client: 'pg',
  connection: process.env.BB_CONNECTION,
  migrations: {
    tableName: 'knex_migrations',
  },
  pool: {
    min: 2,
    max: 10,
  },
};

export default knexConfig;
