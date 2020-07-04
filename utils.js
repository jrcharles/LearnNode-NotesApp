const yargs = require('yargs')
const { string } = require('yargs')
const chalk = require('chalk')

yargs.version('1.3.0')

// add, remove, read, list
// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log(chalk.green('Adding...'))
        console.log(chalk.green('Title: ' + argv.title))
        console.log(chalk.green('Body: ' + argv.body))
    }

})

// Create remove comand
yargs.command({
    command: 'remove',
    describe: 'Remove an existing note',
    handler: function () {
        console.log('Removing a note')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read notes',
    handler: function () {
        console.log('Reading notes')
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'Listing all notes',
    handler: function () {
        console.log('Listing all notes')
    }
})