const { Router } = require('express');
const { getDirectors } = require('../controllers/directors/getDirectors');
const { createDirector } = require('../controllers/directors/postDirectors');
const { updateDirector } = require('../controllers/directors/putDirectors');
const { deleteById } = require('../controllers/directors/deleteDirectors');
const { validateJWT } = require('../middlewares/validate-jwt');

const router = Router();

router.get('/', getDirectors);
router.post('/', createDirector);
router.put('/:id', updateDirector);
router.delete('/:id', deleteById);

module.exports = router;
