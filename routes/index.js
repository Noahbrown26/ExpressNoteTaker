// import express package //

const express = require('express');

const notesRouter = require('./notes');

const app = express();

// set api route to ./notes //

app.use('/api', notesRouter);

module.exports = app;