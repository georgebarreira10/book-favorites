import React from 'react'
import { NavBar, Container, Nav } from 'react-bootstrap'
import { Link } from "react-router-dom"


export default function BooksNav() {
  
    return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <link to="/">home</link>
          <link to="/">login</link>
          <link to="/">books</link>
        </Container>
      </Navbar>
  )
}
