const Todos = require("../models/todo.model");
const Users = require('../models/user.model');


class ToDoServices {
    static async create(newToDo) {
        try {
            const result = await Todos.create(newToDo);
            return result;
        } catch (error) {
            throw error;
        }
    }
    
    static async toDoByUsers(userId) {
        try {
            const result = await Todos.findByPk(
                userId,
                {
                    include: {
                        model: Users,
                    }
                }
            );
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ToDoServices;