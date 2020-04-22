import React from 'react';
import Note from "./Note";

const style = {
  noteListWrap: {
    maxHeight: '70vh',
    overflow: 'scroll',
  }
}

function NoteList(props) {
  const noteList = props.notes.map(n => <Note key={n.id} name={n.name} modified={n.modified} />)
  return (
    <div className="notes">
      <div style={style.noteListWrap}>
        {noteList}
      </div>
      <a className="waves-effect waves-light btn">Add Note</a>
    </div>
  );
}

export default NoteList;
