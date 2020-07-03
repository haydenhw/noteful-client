import React, {createContext, useContext, useEffect, useReducer} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Nav from './components/Nav';
import MainView from "./views/MainView";
import FolderView from "./views/FolderView";
import NoteView from "./views/NoteView";
import nodeData from "./noteData";
import {useStateValue} from "./index";
import api from "./api";


function App() {
  const [state, dispatch] = useStateValue();
  useEffect(() => {
    (async () => {
      const folders = await api.fetchFolders();
      dispatch({
        type: 'loadFolders',
        folders,
      })
    })()
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
          </Switch>
      </div>
    </Router>
  );
}

export default App;
