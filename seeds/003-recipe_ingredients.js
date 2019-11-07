
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {ingredient_name: 'milk', recipe_id: 1, ingredient_id: 1, quantity: 250},
        {ingredient_name: 'eggs', recipe_id: 1, ingredient_id: 2, quantity: 2},
        {ingredient_name: 'flour', recipe_id: 1, ingredient_id: 3, quantity: 500},
        {ingredient_name: 'flour', recipe_id: 2, ingredient_id: 3, quantity: 500},
        {ingredient_name: 'water', recipe_id: 2, ingredient_id: 4, quantity: 200},
        {ingredient_name: 'yeast', recipe_id: 2, ingredient_id: 5, quantity: 2},
        {ingredient_name: 'milk', recipe_id: 3, ingredient_id: 1, quantity: 150},
        {ingredient_name: 'eggs', recipe_id: 3, ingredient_id: 2, quantity: 3},
        {ingredient_name: 'flour', recipe_id: 3, ingredient_id: 3, quantity: 500},
        {ingredient_name: 'butter', recipe_id: 3, ingredient_id: 6, quantity: 200},
        {ingredient_name: 'sugar', recipe_id: 3, ingredient_id: 7, quantity: 200},
        {ingredient_name: 'milk', recipe_id: 3, ingredient_id: 8, quantity: 2},
      ]);
    });
};
