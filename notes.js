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
<<<<<<< HEAD
const addNote = function (title, body) {
  // load notes
  const notes = loadNotes() <<
    <<
    << < HEAD
  const duplicateNote = notes.find((note) => note.title === title) ===
    ===
    =
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
      }) >>>
      >>>
      > parent of 556 be92...Lecture 23 - Refactoring with Arrow functions
=======
const addNote = (title, body) => {
  const notes = loadNotes()
  const duplicateNotes = notes.filter((note) => note.title === title)
>>>>>>> parent of 09b4899... Lecture 24 - Read Notes

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



<<<<<<< HEAD
const readNote = (title) => {
    const notes = loadNotes()
    const displayNote = notes.find((note) => note.title === title)

      <<
      <<
      << < HEAD
    if (displayNote) {
      console.log(chalk.green(displayNote.title))
      console.log(chalk.blue(displayNote.body))
    } else {
      console.log(chalk.red('There is not note with that title.'))
    } ===
    ===
    =
    const getNotes = function () {
      return 'Your Notes...' >>>
        >>>
        > parent of 556 be92...Lecture 23 - Refactoring with Arrow functions
    }

    module.exports = {
      listNotes: listNotes,
      addNote: addNote,
      removeNote: removeNote,
      readNote: readNote
    }
=======
const listNotes = () => {
  console.log(chalk.bold('Your Notes'))
  const notes = loadNotes()

  notes.forEach(note => console.log(chalk.blue.bold(note.title)))
}

module.exports = {
  listNotes: listNotes,
  addNote: addNote,
  removeNote: removeNote
}
>>>>>>> parent of 09b4899... Lecture 24 - Read Notes
