import React from 'react'

function AddNoteCard({ showCard, onNoteChange, data }) {
	
  return (
    <div style={{ margin: '0px 0px 16px 0px', zIndex: showCard ? 2 : 0, transition: 'all 0.7s ease-in-out' }} className={`card add-new-note-card ${showCard && 'show-add-note-card'}`}>
			<textarea autoFocus placeholder='Add a Note...' className='input-box' value={data} onChange={(e) => { onNoteChange(e.target.value) }}/>
    </div>
  )
}

export default AddNoteCard