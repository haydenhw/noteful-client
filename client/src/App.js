import React, {useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import {useStateValue} from "./context";
import api from "./api";
import Nav from './components/Nav';
import MainView from "./views/MainView";
import FolderView from "./views/FolderView";
import NoteView from "./views/NoteView";
import AddFolderView from "./views/AddFolderView";
import AddNoteView from "./views/AddNoteView";

const loadNotesAndFolders = async (dispatch) => {
  const [folders, notes] = await Promise.all([
    api.fetchFolders(),
    api.fetchNotes(),
  ])

  dispatch({
    type: 'loadFolders',
    folders,
  })

  dispatch({
    type: 'loadNotes',
    notes,
  })
}

function App() {
  const [state, dispatch] = useStateValue();
  useEffect(() => {
    try {
      loadNotesAndFolders(dispatch)
    } catch(err) {
      console.log('Failed to fetch notes and or folders with the following error:')
      console.error(err);
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Nav/>
          <Switch>
            <Route exact path="/">
              <MainView/>
            </Route>
            <Route path="/folder/:id">
              <FolderView/>
            </Route>
            <Route path="/note/:id">
              <NoteView/>
            </Route>
            <Route path="/add-folder">
              <AddFolderView/>
            </Route>
            <Route path="/add-note">
              <AddNoteView/>
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
