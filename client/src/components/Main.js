import React from 'react';

const style = {
  main: {
    padding: '30px',
    width: '100%',
  }
}

function Main(props) {
  return (
    <main style={style.main}>
      {props.children}
    </main>
  );
}

export default Main;
