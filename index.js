const express = require('express');
require('dotenv').config();

const server = require('./server')

const port = process.env.port || 3000;

server.listen(port, () => {
    console.log(`\nServer listening on port ${port}\n`);
})
