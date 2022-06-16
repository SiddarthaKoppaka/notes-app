const validator = require("validator");
const printName = require("./app2");

const name = "Siddartha";

printName(name);

console.log(validator.isEmail("siddartha@test.com"));
