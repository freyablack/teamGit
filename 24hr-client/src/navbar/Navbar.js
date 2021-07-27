import React from 'react'
import { Nav } from 'react-bootstrap'

const Navbar = () => {

  const styling = {
    backgroundColor: 'black',
    color: 'white',
  }


  return(
  <Nav
  style={styling}
  activeKey="/home"
  onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
  >
  <Nav.Item style={styling}>
    <Nav.Link style={styling}>Position</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link style={styling}>Weather</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link style={styling}>Events</Nav.Link>
  </Nav.Item>
</Nav>
  )}

export default Navbar;