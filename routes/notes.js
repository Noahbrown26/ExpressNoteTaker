// import express package //

const path = require("path");
const app = require("express").Router();

// get method to send notes.html //

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// get method to send index.html //

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = app;