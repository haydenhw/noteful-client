import React from 'react';
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import FolderList from "../components/FolderList";
import Container from "../components/Container";
import NoteList from "../components/NoteList";
import noteData from "../noteData";

function FolderView() {
  const selectedFolderId = noteData.folders[2].id;
  const notes = noteData.notes.filter(n => n.folderId === selectedFolderId);
  return (
    <Container>
      <Sidebar>
        <FolderList folders={noteData.folders} selectedFolderId={selectedFolderId}/>
      </Sidebar>
      <Main>
        <NoteList notes={notes}/>
      </Main>
    </Container>
  );
}

export default FolderView;
