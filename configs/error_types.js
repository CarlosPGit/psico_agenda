const errorTypes = {
  Error401: function (msg) { // no autorizado
    const err = Error.apply(this, [msg])
    this.name = err.name = 'Error401'
    this.message = err.message
    this.stack = err.stack
    return this
  },
  Error403: function (msg) { // prohibido
    const err = Error.apply(this, [msg])
    this.name = err.name = 'Error403'
    this.message = err.message
    this.stack = err.stack
    return this
  },
  Error404: function (msg) { // no encontrado
    const err = Error.apply(this, [msg])
    this.name = err.name = 'Error404'
    this.message = err.message
    this.stack = err.stack
    return this
  },
  InfoError: function (msg) { // todo ok, solo información
    const err = Error.apply(this, [msg])
    this.name = err.name = 'InfoError'
    this.message = err.message
    this.stack = err.stack
    return this
  }
}

module.exports = errorTypes
