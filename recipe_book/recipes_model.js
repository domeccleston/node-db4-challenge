const db = require('../data/db-config');

function getRecipes() {
    return db('recipes');
}

function getShoppingList(id) {
    // return all ingredients and quantites for a given recipe
    return db('recipe_ingredients').where({ recipe_id: id })
}

module.exports = {
    getRecipes,
    getShoppingList,
}