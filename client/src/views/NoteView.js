import React from 'react';
import {Link, useParams, useHistory} from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import Container from "../components/Container";
import Note from "../components/Note";
import {useStateValue} from "../context";
import api from "../api";

function NoteView() {
  const { id: selectedNoteId  } = useParams();
  const [{folders, notes}, dispatch] = useStateValue();
  const history = useHistory();

  const deleteNote = async (id) => {
    try {
      await api.deleteNote(id)
      history.push('/')
      dispatch({
        type: 'deleteNote',
        id,
      })
    } catch(err) {
      alert(err)
    }
  }

  const note = notes.find(n => n.id === selectedNoteId)
  const folderName = folders.find(f => f.id === note.folderId).name;
  return (
    <Container>
      <Sidebar>
        <div style={{padding: '15px'}}>
          <Link to="/" className="waves-effect waves-light btn" >Go Back</Link>
          <h4>{folderName}</h4>
        </div>
      </Sidebar>
      <Main>
        <Note onDelete={() => deleteNote(note.id)} {...note}/>
        <p>{note.content}</p>
      </Main>
    </Container>
  );
}

export default NoteView;
