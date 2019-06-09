'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RefactoringImagesSchema extends Schema {
  up () {
    this.table('images', (table) => {
      table.dropColumn('image')
      table.dropColumn('date')
      table.dropColumn('busLine')
      table.decimal('latitude').defaultTo(null).alter()
      table.decimal('longitude').defaultTo(null).alter()
      table.string('nome', { length: 30 }).defaultTo(null)
      table.integer('tipo').defaultTo(1)
      table.timestamp('data_criacao').defaultTo(null)
      table.timestamp('data_envio').defaultTo(null)
      table.integer('linha_onibus').defaultTo(null)
      table.integer('numero_onibus').defaultTo(null)
    })
  }

  down () {
    this.table('images', (table) => {
      table.text('image', 'longtext').notNullable()
      table.date('date').defaultTo(null)
      table.string('busLine').defaultTo(null)
      table.string('latitude').defaultTo(null).alter()
      table.string('longitude').defaultTo(null).alter()
    })
  }
}

module.exports = RefactoringImagesSchema
