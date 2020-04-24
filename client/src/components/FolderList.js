import React from 'react';
import {Link, useParams} from "react-router-dom";

const style = {
  sidebar: {
    transform: 'translateX(0%)',
    position: 'static',
    height: '100%',
  }
};

function FolderList(props) {
  const {id: selectedFolderId} = useParams();
  const folderList = props.folders.map(f => {
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
          <a className="waves-effect waves-light btn">Add Folder</a>
        </div>
      </li>
    </ul>
  );
}

export default FolderList;
