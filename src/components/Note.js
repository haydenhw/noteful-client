import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const style = {
  row: {
    display: 'flex',
  },
  colRight: {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
}

function Note(props) {
  return (
    <div className="card">
      <div className="card-content" style={style.row}>
        <div className="col-left">
          <Link style={{color: 'black'}} to={`/note/${props.id}`} className="card-title">{props.name}</Link>
          <span>{new Date(+props.time_modified).toString()}</span>
        </div>
        <div className="col-right" style={style.colRight}>
          <button onClick={props.onDelete} className="waves-effect waves-light btn">Delete Note</button>
        </div>
      </div>
    </div>
  );
}

Note.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default Note;
