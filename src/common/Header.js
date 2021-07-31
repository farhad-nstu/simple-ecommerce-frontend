import React, { Component } from 'react';
import { Link, Redirect, useLocation } from "react-router-dom";
import axios from 'axios';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';


export default class Header extends Component {

  logout = () => {
    localStorage.clear();
    return <Redirect to="/" />
  }



  render() {

    let user = JSON.parse(localStorage.getItem('user'));

      return (
        <div>

          <Navbar bg="light" expand="lg">
            <Navbar.Collapse id="navbarScroll">

              <Link className="p-2" to="/">Home</Link>

              {
                localStorage.getItem('user') ?
                <>
                  <Link className="p-2" to="/categories">Category</Link>
                  <Link className="p-2" to="/products">Product</Link>                
                </>
                :
                <>
                  <Link className="p-2" to="/login">Login</Link>
                  <Link className="p-2" to="/register">Register</Link>
                </>
              }

            </Navbar.Collapse>

            {
                localStorage.getItem('user') ?
                  <Nav>
                    <NavDropdown title={user.name}>
                      <Link to="/" className="" onClick={this.logout}>Logout</Link><br/>
                      <Link to="/profile" className="">Profile</Link>
                    </NavDropdown>
                  </Nav>
                :null
              }         

          </Navbar>

        </div>

    );

  }
}