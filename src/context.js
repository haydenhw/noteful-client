import React, {createContext, useContext, useReducer} from 'react';

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
    case 'loadNotes':
      return {
        ...state,
        notes: action.notes,
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


const StateContext = createContext();
export const StateProvider = (props) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {props.children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
