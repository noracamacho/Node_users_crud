const catchError = require('../utils/catchError');
const User = require('../models/User');

// getAll
const getAll = catchError(async(req, res) => {
    const users = await User.findAll({ order: ['id'] });
    return res.json(users);
});

// Post - create
const create = catchError(async(req, res) => {
    const { first_name, last_name, email, password, birthday } = req.body;
    const user = await User.create({
        first_name,
        last_name,
        email,
        password, 
        birthday
    });
    return res.status(201).json(user);
});

// GetOne
const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const user = await User.findByPk(id);
    return res.json(user)
});

// Detele 
const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await User.destroy({ where: { id }}); //delete from users where user id = id
    return res.sendStatus(204);
});

// Update
const uppdate = catchError(async(req, res) => {
    const { id } = req.params;
    const { first_name, last_name, email, password, birthday } = req.body;
    const user = await User.update(
        { first_name, last_name, email, password, birthday },
        { where: { id }, returning: true} 
    )
    return res.json(user[1][0]);
});


module.exports = {
    getAll,
    create,
    getOne,
    remove,
    uppdate
}