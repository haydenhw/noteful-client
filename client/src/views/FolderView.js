import React from 'react';
import {useParams} from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import FolderList from "../components/FolderList";
import Container from "../components/Container";
import NoteList from "../components/NoteList";
import {useStateValue} from "../context";

function FolderView() {
  const { id: selectedFolderId  } = useParams();
  const [{notes}] = useStateValue();
  const selectedNotes = notes.filter(n => n.folderId === selectedFolderId);
  return (
    <Container>
      <Sidebar>
        <FolderList />
      </Sidebar>
      <Main>
        <NoteList notes={selectedNotes}/>
      </Main>
    </Container>
  );
}

export default FolderView;
