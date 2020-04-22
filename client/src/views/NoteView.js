import React from 'react';
import {Link, useParams} from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import Container from "../components/Container";
import noteData from "../noteData";
import Note from "../components/Note";

function NoteView() {
  const { id: selectedNoteId  } = useParams();
  const note = noteData.notes.find(n => n.id === selectedNoteId)
  const folderName = noteData.folders.find(f => f.id === note.folderId).name;
  return (
    <Container>
      <Sidebar>
        <div style={{padding: '15px'}}>
          <Link to="/" className="waves-effect waves-light btn" >Go Back</Link>
          <h4>{folderName}</h4>
        </div>
      </Sidebar>
      <Main>
        <Note {...note}/>
        <p>{note.content}</p>
      </Main>
    </Container>
  );
}

export default NoteView;
