const Users = require('./user.model');
const Categories = require ('./category.model');
const Todos = require('./todo.model');

const initModels = () => {
    Users.hasMany(Todos, {
        foreignKey: 'owner'
    });
    Todos.belongsTo(Users, {
        foreignKey: 'owner'
    });
    Categories.hasMany(Todos, {
        foreignKey: 'categoryId'
    });
    Todos.belongsTo(Categories, {
        foreignKey: 'categoryId'
    });
}

module.exports = initModels;