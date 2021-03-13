const User = require('../models/users')
const errorTypes = require('../configs/error_types')

const controller = {
  register: (req, res, next) => {
    console.log(req.body.email)
    User.findOne({ email: req.body.email })
      .then(async (data) => {
        // si la consulta se ejecuta
        if (data) {
          // si el usuario existe
          throw new errorTypes.InfoError('user already exists')
        } else {
          // si no existe el usuario se crea/registra
          const document = new User({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            password: req.body.password,
            telefono: req.body.telefono,
            activo: true
          })

          return document.save()
        }
      })
      .then((data) => {
        // usuario registrado con exito, pasamos al siguiente manejador
        res.json({ data: data })
      })
      .catch((err) => {
        // error en registro, lo pasamos al manejador de errores
        next(err)
      })
  }
}

module.exports = controller
