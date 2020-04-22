import React from 'react';
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import FolderList from "../components/FolderList";
import Container from "../components/Container";
import NoteList from "../components/NoteList";
import noteData from "../noteData";

function FolderView() {
  return (
    <Container>
      <Sidebar>
        <FolderList folders={noteData.folders} selectedFolderId={noteData.folders[2].id}/>
      </Sidebar>
      <Main>
        <NoteList notes={noteData.notes} />
      </Main>
    </Container>
  );
}

export default FolderView;
