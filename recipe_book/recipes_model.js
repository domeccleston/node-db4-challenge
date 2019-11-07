const db = require('../data/db-config');

function getRecipes() {
    return db('recipes');
}

function getShoppingList(id) {
    return db('recipe_ingredients').where({ recipe_id: id })
}

function getInstructions(id) {
    return db('instructions').where({ recipe_id: id }).orderBy('step_order');
}

function getRecipesByIngredient(id) {
    return db('recipe_ingredients').where({ ingredient_id: id }).orderBy('recipe_id');
}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
    getRecipesByIngredient,
}