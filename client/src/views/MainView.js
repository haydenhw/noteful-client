import React from 'react';
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import FolderList from "../components/FolderList";
import Container from "../components/Container";
import NoteList from "../components/NoteList";
import {useStateValue} from "../context";

function MainView() {
  const [{notes}] = useStateValue();
  return (
    <Container>
      <Sidebar>
        <FolderList />
      </Sidebar>
      <Main>
        <NoteList notes={notes} />
      </Main>
    </Container>
  );
}

export default MainView;
