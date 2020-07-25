import React from 'react';

const style = {
  flexContainer: {
    display: 'flex',
    height: '100%'
  }
}

function Container(props) {
  return (
    <div style={style.flexContainer}>
      {props.children}
    </div>
  );
}

export default Container;
