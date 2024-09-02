import React from "react";

function StickyNoteCard({ data, idx, removeNote }) {

  return (
    <div
      className="card flex-div remove-card"
      idx={idx}
    >
      <span>{data}</span>
      <div
        style={{ position: "absolute", top: "5px", right: '5px', transition: 'all 0.1 ease-in-out' }}
        className="add-btn rotate45 remove-btn"
				onClick={() => {removeNote(idx)}}
      >
        <div className="line" />
        <div className="line rotate90" />
      </div>
    </div>
  );
}

export default StickyNoteCard;
