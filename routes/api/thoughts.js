const router = require('express').Router();
const { 
    getAllThoughts, 
    getThoughtById,
    updateThought, 
    addThought, 
    removeThought } = require('../../controllers/thought-controller');

// /api/thoughts/<userId>
router.route('/:userId').post(addThought);

// /api/thoughts/<userId>/<thoughtId>
router.route('/:userId/:thoughtId').delete(removeThought);

// get all thoughts
router.route('/').get(getAllThoughts);

//get thoughts by id
router
.route('/:id')
.get(getThoughtById)
.put(updateThought);

module.exports = router;