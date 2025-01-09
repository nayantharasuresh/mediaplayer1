import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
    <Navbar className="bg-warning">
    <Container>
      <Navbar.Brand href="#home">
       <Link to={'/'} className='text-white fs-4 fw-bold text-decoration-none'>
            <i className='fa-solid fa-music'></i> &nbsp;
            Media Player
       </Link>
      </Navbar.Brand>
    </Container>
  </Navbar>
  </>
  )
}

export default Header