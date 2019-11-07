
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {id: 1, step_description: "Combine dry ingredients", recipe_id: 1, step_order: 1},
        {id: 2, step_description: "Mix eggs and milk", recipe_id: 1, step_order: 2},
        {id: 3, step_description: "Combine ingredients together", recipe_id: 1, step_order: 3},
        {id: 4, step_description: "Ladle pancake batter into hot pan", recipe_id: 1, step_order: 4},
      ]);
    });
};
