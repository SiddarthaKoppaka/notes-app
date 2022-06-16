const chalk = require("chalk");

const yargs = require("yargs");
const fs = require("fs");

// console.log(chalk.blue("hello world"));

// console.log(process.argv);

// console.log(process.argv[2]);

// console.log(process.argv);
console.log(yargs.argv);

const input = process.argv[2];

yargs.command({
  command: "add",
  description: "Add notes",
  builder: {
    title: {
      describe: "add title ",
      demandOption: true,
      type: "string",
    },
    body: {
      description: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (array) {
    // console.log("title:", argv.title);
    // console.log("body:", argv.body);
    addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  descreibe: "Remove a note",
  handler: function () {
    console.log("Removing the note");
  },
});

yargs.command({
  command: "read",
  describe: "Read a specific note",
  handler: function () {
    console.log("reading a note");
  },
});

yargs.command({
  command: "list",
  describe: "list all notes",
  handler: function () {
    console.log("listing all notes");
  },
});

yargs.parse();

const user = {
  name: "Siddartha",
  gender: "Male",
};

const userJSON = JSON.stringify(user);
const parsedUser = JSON.parse(userJSON);
fs.writeFileSync("users-json.json", userJSON);

const dataBuffer = fs.readFileSync("users-json.json");
// console.log(dataBuffer);

// console.log(dataBuffer.toString());

const dataJSON = fs.readFileSync("users-json.json").toString();
const data = JSON.parse(dataJSON);
console.log(data.name);
// if (input === "add") {
//   console.log("Note added");
// }
// if (input === "remove") {
//   console.log("note removed");
// } else {
//   console.log("command not recognised");
// }
