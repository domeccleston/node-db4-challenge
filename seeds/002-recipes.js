
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, recipe_name: 'pancakes'},
        {id: 2, recipe_name: 'bread'},
        {id: 3, recipe_name: 'cake'}
      ]);
    });
};
