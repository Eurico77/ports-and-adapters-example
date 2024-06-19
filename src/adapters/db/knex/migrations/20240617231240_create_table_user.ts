import { Knex } from 'knex';

export async function up(knex: Knex) {
  await knex.schema.createTable('users', (table) => {
    table.uuid('id').defaultTo(knex.fn.uuid()).primary();
    table.string('name').notNullable();
    table.string('email').notNullable().unique();
    table.string('password').notNullable();
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex) {
  await knex.schema.dropTable('users');
}
