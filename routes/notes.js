// require packages and paths //

const app = require("express").Router();
const fs = require("fs");
const path = require("path");
const notes = require("../db/db.json");

// get method to return json //

app.get("/notes", function (req, res) {
    res.json(notes);
});

// post method to push notes to database //

app.post("/notes", function (req, res) {
    let newNote = req.body;
    notes.push(newNote);
    console.log(notes);
    appendNotes();
    res.json(notes);
});

// get method to return paramater id's for database //

app.get("/notes/:id", function (req, res) {
    res.json(notes[req.params.id]);
});

// get methods to send notes.js and index.js files//

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// delete method to remove notes from json //

app.delete("/notes/:id", function(req, res) {
    notes.splice(req.params.id, 1);
    appendNotes();
    res.json(notes);
});  

// FS writefile function //

function appendNotes() {
    fs.writeFile("db/db.json", JSON.stringify(notes, '\t'), err => {
        if (err) console.log("error");
        return true;
    })
};

module.exports = app;