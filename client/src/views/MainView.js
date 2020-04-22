import React from 'react';
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import FolderList from "../components/FolderList";
import Container from "../components/Container";
import NoteList from "../components/NoteList";
import noteData from "../noteData";

function MainView() {
  return (
    <Container>
      <Sidebar>
        <FolderList folders={noteData.folders}/>
      </Sidebar>
      <Main>
        <NoteList notes={noteData.notes} />
      </Main>
    </Container>
  );
}

export default MainView;