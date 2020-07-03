const chalk = require('chalk');
const getNotes = require('./notes.js')
const validator = require('validator')

const notes = getNotes()
console.log(notes)

console.log(chalk.green.inverse.bold("Success!"))

console.log(validator.isEmail('jrcharles@mac.com'))
