const { Router } = require( 'express' );
const { getContacts, getContact, setContact, createContact, removeContact } = require('../controllers/contact.controller');
const router = new Router();

/** Rutas para contactos */
router.get( '/', getContacts );
router.get( '/:id', getContact );
router.post( '/', createContact );
router.patch( '/:id', setContact );
router.delete( '/:id', removeContact );


module.exports = router;