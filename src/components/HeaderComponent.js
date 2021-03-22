import React, {Component} from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Button,Modal, ModalHeader ,ModalBody, FormGroup, Label, Input,Form} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import {JUMBO} from '../shared/jumbotronmsg';
import PolicyNew from './policynewcomponent'

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.state = {
          isNavOpen: false,
          jumbo:JUMBO
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }
      toggleModal(){
        this.setState({
            isModalOpen : !this.state.isModalOpen
             });
    }
    handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value );
        <PolicyNew />
       // event.preventDefault();
    }
    
    render() {
        const companyDetails = this.state.jumbo.map((jumbotext) => {
             
         //  alert(jumbotext.companyName)
            // <div> <h1>{jumbotext.companyName}</h1>  
           
            //  <h2>{jumbotext.tagName1}</h2></div>
        }
        
        )
        return(
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/capture.png' height="30" width="41" alt='Hasting Mutual Company' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span>About Us</NavLink>
                            </NavItem>
                            <NavItem>
                            {/* <NavLink className="nav-link" to='/Insurance'><span className="fa fa-info fa-lg"></span> Insurance</NavLink> */}
                                {/* <NavLink className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink> */}
                            </NavItem>
                            <NavItem>
                            
                                <NavLink className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Insurance</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contact'><span className="fa fa-phone fa-lg"></span> Contact Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/insuranceseeker'><span className="fa fa-quora"></span> Insurance Seeker</NavLink>
                            </NavItem>
                            {/* <NavItem>
                                <NavLink className="nav-link" to='/homeowners'><span className="fa fa-phone fa-lg"></span>Home Owners</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/Button'><span className="fa fa-phone fa-lg"></span>Next and Previous</NavLink>
                            </NavItem> */}
                            {/* <NavItem>
                                <NavLink className="nav-link" to='/NextPreviousButton'><span className="fa fa-phone fa-lg"></span>NextPreviousbutton</NavLink>
                            </NavItem> */}
                               <NavItem>
                                <NavLink className="nav-link" to='/Policy'><span className="fa fa-database"></span>Policy</NavLink>
                            </NavItem>
                           {/* <NavItem>
                                <NavLink className="nav-link" to='/MaterialUI'><span className="fa fa-pencil"></span>Table example</NavLink>
                            </NavItem>  */}
                            <NavItem>
                                <NavLink className="nav-link" to='/PolicyNew'><span className="fa fa-newspaper-o"></span>Policy New</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className="nav-link" to='/MyPolicies'><span className="fa fa-pencil"></span>Policy Summary</NavLink>
                            </NavItem>
                            {/* <NavItem>
                                <NavLink className="nav-link" to='/NewHome'><span className="fa fa-phone fa-lg"></span>New Screen</NavLink>
                            </NavItem> */}
                            </Nav>
                             
                        </Collapse>
                    </div>
                </Navbar>
                
                {/* <Jumbotron> */}
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-sm-8">
                           
                            <p>{companyDetails}</p> 
                         <h1>Hasting Mutual Insurance Company</h1> 
                        <p>We are working for your Business</p>
                        <p>Coverage that fits your farm</p>
                        <p>With you when you are at the Wheel</p>
                            </div>
                         
                            <div className="col-sm-4">
                                <br></br>
                                <p></p>
                                <p></p>
                            </div>
                            </div>
                    </div>
                {/* </Jumbotron> */}

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                     <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                        <ModalBody>
                            <Form onSubmit = {this.handleLogin}>
                                <FormGroup>
                                    <Label htmlFor= "username">Username</Label>
                                    <Input type ="text" id ="username" name ="username"
                                        innerRef={(input) => this.username = input} />
                                </FormGroup>
                                <FormGroup>
                                   
                                     <Label htmlFor="password">Password</Label>
                                    <Input type ="password" id ="password" name ="password"
                                     innerRef={(input) => this.password = input} />
                                </FormGroup>
                                {/* <FormGroup check>
                                    <Label check>
                                        <Input type = "checkbox" name="remember"
                                         innerRef={(input) => this.remember = input} />
                                        Remember me
                                    </Label>
                                </FormGroup> */}
                                <Button type="submit" value="submit" color ="primary" >Login</Button>
                            </Form>
                        </ModalBody>
                 </Modal>
            
            </div>
        );
    }
}

export default Header;
