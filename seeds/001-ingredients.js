
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, ingredient_name: 'milk'},
        {id: 2, ingredient_name: 'eggs'},
        {id: 3, ingredient_name: 'flour'},
        {id: 4, ingredient_name: 'water'},
        {id: 5, ingredient_name: 'yeast'},
        {id: 6, ingredient_name: 'butter'},
        {id: 7, ingredient_name: 'sugar'},
        {id: 8, ingredient_name: 'milk'},
      ]);
    });
};
