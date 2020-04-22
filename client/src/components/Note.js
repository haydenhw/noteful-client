import React from 'react';
import { Link } from "react-router-dom";

function Note(props) {
  return (
    <div className="card">
      <div className="card-content">
        <Link style={{color: 'black'}} to={`/note/${props.id}`} className="card-title">{props.name}</Link>
        <span>{new Date(props.modified).toString()}</span>
      </div>
    </div>
  );
}

export default Note;
