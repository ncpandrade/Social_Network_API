const router = require('express').Router();
const thoughtRoutes = require('./thoughts');
const userRoutes = require('./users');

// add prefix of `/thoughts` to routes created in `thoughts.js`
router.use('/thoughts', thoughtRoutes);
// add prefix of `/user` to routes created in `users.js`
router.use('/users', userRoutes);

module.exports = router;
