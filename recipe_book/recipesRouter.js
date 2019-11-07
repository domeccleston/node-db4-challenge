const express = require("express");

const server = require("../server");

const Recipes = require("./recipes_model");

const recipesRouter = express.Router();

recipesRouter.get("/", (req, res) => {
  Recipes.getRecipes()
    .then(recipes => {
      res.json(recipes);
    })
    .catch(err => {
      res.json(err);
    });
});

recipesRouter.get("/:id/shoppinglist", (req, res) => {
  Recipes.getShoppingList(req.params.id)
    .then(shoppinglist => {
      res.json(shoppinglist);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = recipesRouter;
