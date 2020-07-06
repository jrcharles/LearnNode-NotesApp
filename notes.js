const fs = require('fs')
const chalk = require('chalk')

// function to load notes
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (err) {
    return []
  }
}

// function to save notes
const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

// function to add note
const addNote = (title, body) => {
  const notes = loadNotes()
  const duplicateNotes = notes.filter((note) => note.title === title)

  // check if title exists
  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    })
  } else {
    console.log('note title taken!')
  }

  saveNotes(notes)
}

//function to remove notes
const removeNote = (title) => {
  const notes = loadNotes()

  const updatedNotes = notes.filter((note) => note.title != title)

  //Check if the note was actually removed or exists
  if (updatedNotes.length < notes.length) {
    console.log(chalk.green('Note was successfully removed.'))
  } else {
    console.log(chalk.red('Note does not exist.'))
  }

  saveNotes(updatedNotes)
}



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