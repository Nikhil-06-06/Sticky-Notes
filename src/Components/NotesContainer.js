import React, { useState, useEffect } from "react";
import NewNote from "./NewNote";
import EmptyBoard from "./EmptyBoard";
import Board from "./Board";
import { local_storage_key } from "../Constants/Constants";

function NotesContainer() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storeNotes = window.localStorage.getItem(local_storage_key);
    if(storeNotes) {
      setNotes(JSON.parse(storeNotes));
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem(local_storage_key, JSON.stringify(notes));
  }, [notes])

  const addNewNote = (data) => {
    setNotes([data, ...notes]);
  }

  const removeNote = (index) => {
    const newNotes = notes.filter((val, idx) => idx !== index);
    setNotes(newNotes)
  }

  return (
    <div className="notes-container flex-div">
      {notes.length === 0 ? <EmptyBoard /> : <Board notes={notes} removeNote={removeNote} />}
      <NewNote addNewNote={addNewNote} />
    </div>
  );
}

export default NotesContainer;
