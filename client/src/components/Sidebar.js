import React from 'react';

const style = {
  sidebarWrapper: {
    height: '100%',
    width: '300px',
  },
}

function Sidebar(props) {
  return (
    <div style={style.sidebarWrapper}>
      {props.children}
    </div>
  );
}

export default Sidebar;
