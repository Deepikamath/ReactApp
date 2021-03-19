
import React, { Component } from "react";
import { Table, Button} from "reactstrap";
//import { withRouter } from 'react-router-dom';
import AccHolderHomeScreen from './AccHolderHomeScreenComponent'
import {PolicyInfo} from '../shared/PolicyInfo.json'
import {PolicyDetail} from './PolicyDetailComponent'
class AccSubTemplate extends Component {
  constructor(props) {
    super(props);
  
  }
render() {  
    const PolicyPeriod = this.props.PolicyPeriod
    var entity= null;
  
  const Subtype= PolicyPeriod.Policy.Account.AccountHolderContact.Subtype
  if(Subtype== 'Company'){
    entity= PolicyPeriod.Policy.Account.AccountHolderContact['entity-Company'].Name
  }
  else if(Subtype== 'Person') {
    entity= PolicyPeriod.Policy.Account.AccountHolderContact['entity-Person'].Name
  }

return( 
  <div className = "container">
     <Button onClick={this.props.backbutton}>Back</Button>
  <br />
  <br />
  <div className="row">
   <PolicyDetail PolicyPeriod={PolicyPeriod}   ></PolicyDetail>
   </div>
      </div> 
)  
} 
}

export default  AccSubTemplate ;