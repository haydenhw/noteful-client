import React from 'react';
import {Link, useParams, useHistory} from "react-router-dom";
import {useStateValue} from "../context";

const style = {
  sidebar: {
    transform: 'translateX(0%)',
    position: 'static',
    height: '100%',
  }
};

function FolderList() {
  const history = useHistory();
  const routeToAddFolderView = () => {
    history.push('/add-folder')
  }

  const [{folders}] = useStateValue();
  const {id: selectedFolderId} = useParams();
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
                  onClick={routeToAddFolderView }
          >Add Folder
          </button>
        </div>
      </li>
    </ul>
  );
}

export default FolderList;
