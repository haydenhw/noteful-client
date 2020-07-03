import React from 'react';
import {Link, useParams} from "react-router-dom";
import {useStateValue} from "../index";
import api from '../api';

const style = {
  sidebar: {
    transform: 'translateX(0%)',
    position: 'static',
    height: '100%',
  }
};

let folderId = 1;
const generateMockFolder = () => {
  return {
    "id": folderId++,
    "name": "Folder " + Math.floor(Math.random() * 10000),
  }
}

function FolderList() {
  const [{folders}, dispatch] = useStateValue();
  const {id: selectedFolderId} = useParams();
  const createFolder = () => {
    const newFolder = generateMockFolder();
    dispatch({
      type: 'addFolder',
      newFolder
    })

    api.createFolder(newFolder);
  }
  // this is folders fro sttate instead of props
  const folderList = folders.map(f => {
      const listItemStyle = {backgroundColor: f.id === selectedFolderId ? 'lightgrey' : ''};
      return (
        <li style={listItemStyle} key={f.id}>
          <Link to={`/folder/${f.id}`}>
            {f.name}
          </Link>
        </li>
      );

    }
  );
  return (
    <ul style={style.sidebar} className="sidenav sidenav-fixed">
      {folderList}
      <li>
        <div style={{paddingLeft: '15px'}}>
          <button className="waves-effect waves-light btn"
                  onClick={createFolder}
          >Add Folder
          </button>
        </div>
      </li>
    </ul>
  );
}

export default FolderList;
