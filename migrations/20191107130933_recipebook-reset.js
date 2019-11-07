exports.up = function(knex) {
    return knex.schema
      .createTable("recipes", table => {
        table.increments();
        table.string("recipe_name", 128).notNullable();
      })
      .createTable("ingredients", table => {
        table.increments();
        table.string("ingredient_name", 128).notNullable();
      })
      .createTable("recipe_ingredients", table => {
        table
          .string("ingredient_name")
          .references("ingredient_name")
          .inTable("ingredients");
        table
          .integer("recipe_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("recipes");
        table
          .integer("ingredient_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("ingredients");
        table.float("quantity").notNullable();
        table.primary(["recipe_id", "ingredient_id"]);
      })
      .createTable("instructions", table => {
        table.increments();
        table.string("step_description", 128).notNullable();
        table
          .integer("recipe_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("recipes");
        table
          .integer("step_order")
          .unsigned()
          .notNullable();
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists("instructions")
      .dropTableIfExists("recipe_ingredients")
      .dropTableIfExists("recipes")
      .dropTableIfExists("ingredients")
  };
  