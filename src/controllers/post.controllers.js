const ToDoServices = require('../services/post.services')

const getToDoByUsers = async ( req, res ) => {
    try {
        const {userId} = req.params;
        const toDoByUsers = await ToDoServices.toDoByUsers(userId)
        res.json(toDoByUsers);
    } catch (error) {
        res.status(400).json(error)
    }
}
const createToDo =  async (req, res) => {
    try {
        const newToDo = req.body;
        const toDo = await ToDoServices.create(newToDo);
        res.estatus(201).json(toDo);
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {
    createToDo,
    getToDoByUsers,
}