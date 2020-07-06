const yargs = require('yargs')
const {
    string
} = require('yargs')
const chalk = require('chalk')
const notes = require('./notes.js')

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
        console.log(chalk.green('Adding note...'))
        notes.addNote(argv.title, argv.body)
    }

})

// Create remove comand
yargs.command({
    command: 'remove',
    describe: 'Remove an existing note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log(chalk.red('Removing note... ', argv.title))
        notes.removeNote(argv.title)
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read notes',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: string
        }
    },
    handler: (argv) => {
        notes.readNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'Listing all notes',
    handler: () => notes.listNotes()
})