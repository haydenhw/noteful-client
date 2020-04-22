import React from 'react';
import Nav from './components/Nav';
import MainView from "./views/MainView";
import FolderView from "./views/FolderView";
import NoteView from "./views/NoteView";

function App() {
  return (
    <div className="App">
      <Nav/>
      {/*<FolderView/>*/}
      {/*<MainView/>*/}
      <NoteView/>
    </div>
  );
}

export default App;
