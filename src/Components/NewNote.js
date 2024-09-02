import React, { useState } from 'react'
import AddNoteCard from './AddNoteCard';

function NewNote({ addNewNote }) {
	const [addNote, onAddNewNote] = useState(false);
	const [note, setNote] = useState("")

	const onAddNoteClick = () => {
		if(addNote) setNote("");
		onAddNewNote(!addNote);
	}

	const onNoteChange = (data) => {
		setNote(data);
	}

	const onStickNote = () => {
		if(note.length > 0) addNewNote(note);
		setNote("");
	}

	const addNoteButton = () => {
		return (
			<div className='flex-div'>
				<div className={`stick-note-button ${addNote && 'show-stick-btn'}`} onClick={onStickNote}>
					<div className='tick-sm'/>
					<div className='tick-bg'/>
				</div>
				<div className={`add-btn ${addNote && 'rotate45'}`} onClick={onAddNoteClick}>
					<div className='line'/>
					<div className='line rotate90'/>
				</div>
			</div>
		);
	}

  return (
    <div className='new-note-container'>
      <AddNoteCard showCard={addNote} onNoteChange={onNoteChange} data={note} />
			{addNoteButton()}
    </div>
  )
}

export default NewNote