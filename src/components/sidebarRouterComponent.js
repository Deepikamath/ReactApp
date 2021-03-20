 import React,{ Component } from 'react';
  import { Link } from 'react-router';
  import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Button,Modal, ModalHeader ,ModalBody, FormGroup, Label, Input,Form} from 'reactstrap';
  import { NavLink } from 'react-router-dom'
   class sidebarRouter extends Component {
    render() {    
        alert("He")
      return (
        <Navbar dark expand="md">
        <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/"><img src='assets/images/capture.png' height="30" width="41" alt='Hasting Mutual Company' /></NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
                <Nav navbar>
                
              <ul >
                <li>
                <NavItem>
                    <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                </NavItem>
                </li>
                <li>
                <NavItem>
                    <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span>AFC About Us</NavLink>
                </NavItem>
                </li>
                <li>
                <NavItem>
                
                    <NavLink className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Insurance</NavLink>
                </NavItem>
                </li>
                <li>
                <NavItem>
                    <NavLink className="nav-link" to='/contact'><span className="fa fa-phone fa-lg"></span> Contact Us</NavLink>
                </NavItem>
                </li>
                <li>
                <NavItem>
                    <NavLink className="nav-link" to='/insuranceseeker'><span className="fa fa-quora"></span> Insurance Seeker</NavLink>
                </NavItem>
                </li>
                <li>
               <NavItem>
                    <NavLink className="nav-link" to='/MyPolicies'><span className="fa fa-phone fa-lg"></span>Tab Example</NavLink>
                </NavItem>
                </li>
                <li>
                <NavItem>
                    <NavLink className="nav-link" to='/NewHome'><span className="fa fa-phone fa-lg"></span>New Screen</NavLink>
                </NavItem>
                </li>
                </ul>
                </Nav>
              
           
                 
            </Collapse>
        </div>
    </Navbar>
    
        );
    }
  }

  export default sidebarRouter;