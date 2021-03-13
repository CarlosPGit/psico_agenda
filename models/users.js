const mongoose = require('mongoose')

const { Schema, model } = mongoose

const UserSchema = new Schema({
  id: { type: 'string', columnName: '_id' },
  nombre: { type: 'string', columnName: 'nombre', required: true },
  apellido: { type: 'string', columnName: 'apellido', required: true },
  email: { type: 'string', columnName: 'email', required: true, unique: true },
  password: { type: 'string', columnName: 'Password', required: true },
  telefono: { type: 'string', columnName: 'telefono', required: true },
  activo: { type: 'boolean', columnName: 'Enabled', defaultsTo: true }
})

module.exports = model('users', UserSchema)
