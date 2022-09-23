import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Books from './pages/Books';
import BooksNav from './components/BooksNav'

import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import BooksNav from './components/BooksNav';

function App() {

  return (

    < BrowserRouter >

      <h1>Book Favorites</h1>

      <BooksNav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/books" element={<Books />} />
        <Route path="/*" element={<h1>Essa página não existe</h1>} />
      </Routes>
    </BrowserRouter >
  );


}

export default App;
