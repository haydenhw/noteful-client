import React from 'react';
import ErrorBoundary from "./ErrorBoundary";

const style = {
  sidebarWrapper: {
    height: '100%',
    width: '300px',
  },
}

function Sidebar(props) {
  return (
    <ErrorBoundary>
      <div style={style.sidebarWrapper}>
        {props.children}
      </div>
    </ErrorBoundary>
  );
}

export default Sidebar;
