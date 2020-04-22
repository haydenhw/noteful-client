import React from 'react';

const style = {
  sidebar: {
    transform: 'translateX(0%)',
    position: 'static',
    height: '100%',
  }
}

function FolderList(props) {
  const folderList = props.folders.map(f => {
      const folderItemStyle = { backgroundColor: f.id === props.selectedFolderId ?  'lightgrey': '' };
      return <li style={folderItemStyle} key={f.id}><a href="#!">{f.name}</a></li>;
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
