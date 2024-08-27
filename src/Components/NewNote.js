import React, { useState } from 'react'
import AddNoteCard from './AddNoteCard';

function NewNote() {

	const [addNote, onAddNewNote] = useState(false);

	const onAddNoteClick = () => {
		onAddNewNote(!addNote);
	}

	const addNoteButton = () => {
		return (
			<div className={`add-btn ${addNote && 'rotate45'}`} onClick={onAddNoteClick}>
				<div className='line'/>
				<div className='line rotate90'/>
			</div>
		);
	}

  return (
    <div className='new-note-container'>
      <AddNoteCard showCard={addNote} />
			{addNoteButton()}
    </div>
  )
}

export default NewNote