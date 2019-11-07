const express = require('express');
const recipesRouter = require('./recipe_book/recipesRouter');
const server = express();

server.use(express.json());
server.use('/api/recipes', recipesRouter);

module.exports = server;