import React, { useEffect, useRef } from 'react'

function AddNoteCard({ showCard }) {
	
  return (
    <div className={`add-new-note-card ${showCard && 'show-add-note-card'}`}>
			<textarea autoFocus placeholder='Add a Note...' className='input-box'/>
    </div>
  )
}

export default AddNoteCard