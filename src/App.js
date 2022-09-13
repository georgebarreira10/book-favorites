import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
function App() {

  return (

    < BrowserRouter >

      <h1>Book Favorites</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
          <Link to="/login">login</Link>
            {/* <a href="/login">login</a> */}
          </li>
        </ul>


      </nav>

      {/* < Home />
      < Login /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter >
  );


}

export default App;
