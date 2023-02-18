import './App.css';
import React from 'react';
import Todo from './components/Todo';
import Modal from './components/Modal';

function App() {
  // let a = React.createElement('div');
  // let b = a.createElement('h1', null, "Exemple avec React");
  // return b;
  let allTodos = [
    {
      id: 1,
      contenu: "Learn React"
    },
    {
      id: 2,
      contenu: "Learn Angular"
    },
    {
      id: 3,
      contenu: "Learn Vue.js"
    }
  ]
  return (
    <>
      <h1>My Todos</h1>
      <br></br>
      {/* <Todo text="Learn React" />
      <Todo text="Learn Angular" />
      <Todo text="Learn Vue.JS" /> */}
      {allTodos.map((todo) => {
        return <Todo key={todo.id} text={todo.contenu}></Todo>
      })}
    </>
  );


}

export default App;
