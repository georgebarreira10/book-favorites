import React from 'react'
import { NavBar, Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from "react-router-dom"


export default function BooksNav() {
  
    return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/">home</Link>
          <Link to="/login">login</Link>
          <Link to="/books">books</Link>
        </Container>
      </Navbar>
  )
}
