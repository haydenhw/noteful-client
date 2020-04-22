import React from 'react';

const style = {
  Note: {
  }
}

function Note(props) {
  return (
    <div className="card">
      <div className="card-content">
        <span className="card-title">{props.name}</span>
        <span>Cool Date</span>
      </div>
    </div>
  );
}

export default Note;
