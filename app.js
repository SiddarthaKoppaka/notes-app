// const getNotes = require("./notes.js");
const { getNotes, addNote } = require("./notes.js");

// const fs = require("fs");

// fs.writeFileSync("note.txt", "this is my node test module");

const msg = getNotes();

console.log(msg);
