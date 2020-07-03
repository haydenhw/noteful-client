import React from 'react';
import Note from "./Note";

const style = {
  noteListWrap: {
    maxHeight: '70vh',
    overflow: 'scroll',
  }
}

function NoteList(props) {
  const noteList = props.notes.map(n => <Note key={n.id} {...n} />)
  return (
    <div className="notes">
      <div style={style.noteListWrap}>
        {noteList}
      </div>
      <button className="waves-effect waves-light btn">Add Note</button>
    </div>
  );
}

export default NoteList;
