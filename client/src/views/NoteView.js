import React from 'react';
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import Container from "../components/Container";
import noteData from "../noteData";
import Note from "../components/Note";

function NoteView() {
  const selectedFolderId = noteData.folders[2].id;
  const selectedFolderName = noteData.folders[2].name;
  const note = noteData.notes[0]
  return (
    <Container>
      <Sidebar>
        <div style={{padding: '15px'}}>
          <a className="waves-effect waves-light btn">Add Note</a>
          <h4>{selectedFolderName}</h4>
        </div>
      </Sidebar>
      <Main>
        <Note name={note.name} modified={note.modified} />
        <p>{note.content}</p>
      </Main>
    </Container>
  );
}

export default NoteView;
