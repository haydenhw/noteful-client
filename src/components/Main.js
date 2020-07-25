import React from 'react';
import ErrorBoundary from "./ErrorBoundary";

const style = {
  main: {
    padding: '30px',
    width: '100%',
  }
}

function Main(props) {
  return (
    <ErrorBoundary>
      <main style={style.main}>
        {props.children}
      </main>
    </ErrorBoundary>
  );
}

export default Main;
