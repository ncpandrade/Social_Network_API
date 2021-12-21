const router = require('express').Router();
const { 
    getAllThoughts, 
    getThoughtById,
    updateThought, 
    addThought, 
    removeThought,
    addReaction,
    removeReaction } = require('../../controllers/thought-controller');
//to delete thought
//yes we need both userId and thoughtId
//what you need to do is first delete the though using thoughtId
//and then remove thought id from user's thoughts field (here you will be deleting the thoughId from the user model using userId)


// /api/thoughts/<userId>
router.route('/:userId').post(addThought);

// /api/thoughts/<userId>/<thoughtId>
router.route('/:userId/:thoughtId')
.delete(removeThought);

// get all thoughts 
router.route('/').get(getAllThoughts);

//get thoughts by id
router
.route('/:id')
.get(getThoughtById)
.put(updateThought);

// /api/thoughts/:thoughtId/reactions
router
.route('/:thoughtId/reactions')
.post(addReaction)

// /api/thoughts/:thoughtId/reactions
router
.route('/:thoughtId/reactions/:reactionId')
.delete(removeReaction)

module.exports = router;