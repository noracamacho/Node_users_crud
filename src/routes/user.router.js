const { getAll, create, getOne, remove, uppdate } = require('../controllers/user.controllers');
const express = require('express');

const userRouter = express.Router();

userRouter.route("/") // /users
// Methods
        .get(getAll)
.post(create);

userRouter.route("/:id") // /user/:id
// Methods
    .get(getOne)
    .delete(remove)
    .put(uppdate);

module.exports = userRouter;