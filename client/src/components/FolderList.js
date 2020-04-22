import React from 'react';
import {Link, useParams} from "react-router-dom";

const style = {
  sidebar: {
    transform: 'translateX(0%)',
    position: 'static',
    height: '100%',
  }
}

function FolderList(props) {
  const { id: selectedFolderId  } = useParams();
  const folderList = props.folders.map(f => {
      const folderItemStyle = { backgroundColor: f.id === selectedFolderId ?  'lightgrey': '' };
    return (
      <li style={folderItemStyle} key={f.id}>
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
        <a className="waves-effect waves-light btn">Add Folder</a>
      </li>
    </ul>
  );
}

export default FolderList;
