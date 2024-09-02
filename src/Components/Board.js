import React from 'react'
import StickyNoteCard from './StickyNoteCard'

function Board({ notes, removeNote }) {
  return (
    <div className='board'>
			<div className='grid-container'>
			  {notes.map((data, idx) => <StickyNoteCard key={idx} data={data} idx={idx} removeNote={removeNote} />)}
			</div>
    </div>
  )
}

export default Board