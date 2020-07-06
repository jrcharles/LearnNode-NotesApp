const fs = require('fs')
const chalk = require('chalk')

// function to load notes
const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (err) {
    return []
  }
}

// function to save notes
const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

// function to add note
const addNote = function (title, body) {
  // load notes
  const notes = loadNotes()
  const duplicateNotes = notes.filter(function (note) {
    return note.title === title
  })

  // check if title exists
  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    })
  } else {
    console.log('note title taken!')
  }

  // Lastly, save the notes
  saveNotes(notes)
}

//function to remove notes
const removeNote = function (title) {
  // load notes
  const notes = loadNotes()

  var position = -1

  // Check to find 
  for (const note of notes) {
    if (note.title === title) {
      position = notes.indexOf(note)
      console.log(chalk.green('Note successfully removed.'))
      notes.splice(position, 1)

    }
  }

  if (position === -1) {
    console.log(chalk.red('Note does not exist.'))
  }

  // Lastly, save the notes
  saveNotes(notes)
}



const getNotes = function () {
  return 'Your Notes...'
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote
}