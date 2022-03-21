const router = require('express').Router()
const contactsControllers = require('../../controllers/contacts')
const { body } = require('express-validator');

router.get('/', contactsControllers.getAlls)

router.post('/new', [
    body('firstname', 'Ingrese un nonmbre').notEmpty().isString().isLength({max: 18}),
    body('lastname', 'Ingrese un apellido').notEmpty().isString().isLength({max: 15}),
    body('birthday','Ingrese una fecha DD/MM/YYYY').notEmpty().isNumeric().isLength({max:8}),
    body('phone', 'Ingrese un numero de telefono').isMobilePhone().notEmpty().isNumeric(),
    body('email','Ingrese un e-mail válido').notEmpty().isEmail()
] , contactsControllers.createContact)

router.get('/delete/:id', contactsControllers.deleteOne)

router.get('/edit/:id', contactsControllers.edit)

router.post('/update/:id', [
    body('firstname', 'Ingrese un nonmbre').notEmpty().isString().isLength({max: 18}),
    body('lastname', 'Ingrese un apellido').notEmpty().isString().isLength({max: 15}),
    body('birthday','Ingrese una fecha DD/MM/YYYY').notEmpty().isNumeric().isLength({max:8}),
    body('phone','Ingrese un numero de telefono').notEmpty().isString().isMobilePhone(),
    body('email','Ingrese un e-mail válido').notEmpty().isEmail()
], contactsControllers.updateOne)

module.exports= router