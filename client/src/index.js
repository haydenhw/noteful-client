import React, {createContext, useContext, useReducer} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const StateContext = createContext();
const StateProvider = ({reducer, initialState, children}) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);

const initialState = {
  folders: [],
  notes: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'loadFolders':
      return {
        ...state,
        folders: action.folders,
      };
    case 'addFolder':
      return {
        ...state,
        folders: [...state.folders, action.newFolder]
      };
    case 'deleteFolder':
      return {
        ...state,
        folders: state.folders.filter(folder => folder.id !== action.id)
      };
    case 'addNote':
      return {
        ...state,
        notes: [...state.notes, action.newNote]
      };
    case 'deleteNote':
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== action.id)
      };
    default:
      return state;
  }
};

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App/>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
