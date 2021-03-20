
import React, { Component } from "react";
import './common.css'
import { Table, Button } from "reactstrap";
//import sidebarRouter from './sidebarRouterComponent';

//import { withRouter } from 'react-router-dom';
class NewHome extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div class="container">
            <div class="row no-gutters">
           
            <div class="col-6 col-md-4"> 
            {/* navbar sidebar  */}
            {/* <sidebarRouter /> */}
            {/* <Navbar /> */}
            </div>
            <div class="col-12 col-sm-6 col-md-8">MyPolicies</div>
          </div>
          </div>
        )

    }
}

export default NewHome;