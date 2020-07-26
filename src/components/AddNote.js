import React from 'react';
import shortId from 'shortid'
import { useHistory } from 'react-router-dom'
import NoteForm from "./NoteForm";
import {useStateValue} from "../context";
import api from "../api";

const tryToAddNote = async (dispatch, history, newNote) => {
  const savedNote = await api.createNote(newNote)
  dispatch({
    type: 'addNote',
    newNote: savedNote
  })

  history.push('/')
}

function AddNote() {
  const [{folders}, dispatch] = useStateValue();
  const history = useHistory();
  const addNote = (newNote) => {
      try {
        tryToAddNote(dispatch, history, newNote)
      } catch(err) {
        console.error(` Unfortunately your request to create a new note fail with error: \n ${err}`)
      }
  }

  if (!folders.length) {
    return <></>
  }

  return (
    <NoteForm title="New Note" folders={folders} onSubmit={addNote} onCancelClick={() => history.push('/')} />
  );
}

export default AddNote;
