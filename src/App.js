import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from "react-bootstrap/Alert";
import {useEffect, useState} from "react";

function Home() {
  return (
    <div>Home</div>
  )
}

function About() {
  return (
    <div>About</div>
  )
}

function Todos() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(data => setTodos(data))
  }, []) // like componentDidMount
  return ( // JSX
    <>
      <div>Todos</div>
      { todos.map(todo => <div>
        { todo.id + ' - ' +
          todo.title +
          (todo.completed ? ' (done) ' : ' (open)')
        }
      </div>)}
    </>
  )
}


function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/" className="navlink">Home</Link>
        <Link to="/about" className="navlink">About</Link>
        <Link to="/todos" className="navlink">Todos</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="todos" element={<Todos/>} />
        <Route path="*" element={
          <Alert variant={'danger'}>There's nothing here!</Alert>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
