import React from 'react';
import { useHistory } from 'react-router-dom'
import FolderForm from "./FolderForm";
import {useStateValue} from "../context";
import api from "../api";

const tryToAddFolder = async (dispatch, history, newFolder) => {

  await api.createFolder(newFolder)
  dispatch({
    type: 'addFolder',
    newFolder
  })

  history.push('/')
}

function AddFolder() {
  const [state, dispatch] = useStateValue();
  const history = useHistory();
  const addFolder = (newFolder) => {
      try {
        tryToAddFolder(dispatch, history, newFolder)
      } catch(err) {
        console.error(` Unfortunately your request to create a new folder failed with error: \n ${err}`)
      }
  }

  return (
    <FolderForm title="New Folder" onSubmit={addFolder}/>
  );
}

export default AddFolder;
