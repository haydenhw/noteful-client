import React from 'react';
import Note from "./Note";
import { useHistory } from "react-router-dom"
import {useStateValue} from "../context";
import api from "../api";
import PropTypes from "prop-types";

const style = {
  noteListWrap: {
    maxHeight: '70vh',
    overflow: 'scroll',
  }
}

function NoteList(props) {
  const [state, dispatch] = useStateValue();
  const deleteNote = async (id) => {
    try {
      await api.deleteNote(id)
      dispatch({
        type: 'deleteNote',
        id,
      })
    } catch(err) {
      alert(err)
    }
  }

  const history = useHistory()
  const routeToAddNotesView = () => {
    history.push('/add-note')
  }

  const noteList = props.notes.map(n => <Note key={n.id} onDelete={() => deleteNote(n.id)} {...n} />)
  return (
    <div className="notes">
      <div style={style.noteListWrap}>
        {noteList}
      </div>
      <button onClick={routeToAddNotesView } className="waves-effect waves-light btn">Add Note</button>
    </div>
  );
}

Note.propTypes = {
  notes: PropTypes.array,
}

export default NoteList;
