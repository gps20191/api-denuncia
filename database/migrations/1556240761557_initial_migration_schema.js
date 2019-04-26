'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InitialMigrationSchema extends Schema {
  up () {
    this.create('images', (table) => {
      table.increments()
      table.string('external_id').notNullable().unique()
      table.date('date').defaultTo(null)
      table.string('url').notNullable().unique()
      table.string('latitude').defaultTo(null)
      table.string('longitude').defaultTo(null)
      table.string('busLine').defaultTo(null)
      table.text('image', 'longtext').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('images')
  }
}

module.exports = InitialMigrationSchema
