import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Todo from './Todo'

const Greeting =() => {
  return (
    <div>
      <h2>TO do </h2>
      {/* <App/> */}
      <Todo/>
    </div>
  );
}

ReactDOM.render(<Greeting/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
