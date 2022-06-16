const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const addNote = function (title, body) {
  const notes = loadNotes();
  notes.push({
    title,
    body,
  });
  saveNotes(notes);
};

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

// const existingNotes = notes.filter((note) => {
//   return note.title === title;
// });

// if (existingNotes === 0) {
//   notes.push({
//     title,
//     body,
//   });
//   saveNotes(notes);
// } else {
//   console.log("Note title already exists");
// }

const getNotes = function () {
  return saveNotes;
};

module.exports = {
  getNotes,
  loadNotes,
};
