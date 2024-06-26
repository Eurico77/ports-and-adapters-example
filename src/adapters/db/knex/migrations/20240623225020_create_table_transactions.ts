import { Knex } from 'knex';

export async function up(knex: Knex) {
  await knex.schema.createTable('transactions', (table) => {
    table.uuid('id').defaultTo(knex.fn.uuid()).primary();
    table.string('description').notNullable();
    table.decimal('value');
    table.date('expiresDate').notNullable().defaultTo(knex.fn.now());
    table.uuid('user_id').references('id').inTable('users').notNullable();
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex) {
  await knex.schema.dropTable('transactions');
}
