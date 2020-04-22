import React from 'react';
import Nav from './components/Nav';
import MainView from "./views/MainView";
import FolderView from "./views/FolderView";

function App() {
  return (
    <div className="App">
      <Nav/>
      <FolderView/>
      <MainView/>
    </div>
  );
}

export default App;
