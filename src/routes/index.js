const express = require('express');
const userRouter = require('./user.router');
const router = express.Router();

// Routes
router.use('/users', userRouter);


module.exports = router;