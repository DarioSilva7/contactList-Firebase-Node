const router = require('express').Router()
const contactsControllers = require('../../controllers/contacts')

router.get('/', contactsControllers.getAlls)

router.post('/', contactsControllers.createContact)

router.post('/:id', contactsControllers.updateOne)

router.get('/:id', contactsControllers.deleteOne)

module.exports= router