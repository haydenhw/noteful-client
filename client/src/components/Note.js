import React from 'react';

function Note(props) {
  return (
    <div className="card">
      <div className="card-content">
        <span className="card-title">{props.name}</span>
        <span>{new Date(props.modified).toString()}</span>
      </div>
    </div>
  );
}

export default Note;
