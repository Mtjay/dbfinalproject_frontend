import React from "react"
import * as ReactBootStrap from "react-bootstrap"
import './NavigationBar.css'

class NavigationBar extends React.Component  {
  render()  {
    return(
      <ReactBootStrap.Navbar bg="dark" variant="dark" sticky="top">             
        <ReactBootStrap.Navbar.Brand href="#home" style={{paddingLeft: 10}}>Movie Data Visualization</ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Nav className="me-auto">
          <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="#About">About</ReactBootStrap.Nav.Link>                    
        </ReactBootStrap.Nav>                
        <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" style={{marginLeft: 900}}/>
        <button type="button" style={{marginRight: 10, height: 40}}>SEARCH</button>        
      </ReactBootStrap.Navbar>
    )
  }
}

export default NavigationBar