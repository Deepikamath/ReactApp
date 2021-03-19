
import React, { Component } from "react";
import { Table, Button} from "reactstrap";
//import { withRouter } from 'react-router-dom';
import AccHolderHomeScreen from './AccHolderHomeScreenComponent'
import {PolicyInfo} from '../shared/PolicyInfo.json'
class PolicyDetail extends Component {
  constructor(props) {
    super(props);
  
  }


render() {  
    const PolicyPeriod = this.props.PolicyPeriod
    var entity= null;
  
  const Subtype= PolicyPeriod.Policy.Account.AccountHolderContact.Subtype
  //alert(Subtype)
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
   
  <Table bordered="true" className="-striped -highlight">
     
     <tr>
      <th>Account Details</th>
       <th></th>
      </tr>
      <tr><td>Account Name</td>      
      <td>{entity}</td>
      </tr>    
       <tr><td>Account Number</td>
      <td>{PolicyPeriod.Policy.Account.AccountNumber}
      </td>
      </tr>
      <tr><td>Business Address</td>
      <td>{PolicyPeriod.Policy.Account.AccountHolderContact.PrimaryAddress.AddressType}</td>
      </tr>
       <tr><td>In Force Premium</td>
      <td>{PolicyPeriod.TotalPremiumRPT}</td>
      </tr>
      <tr><td>Account Holder Contact</td>
      <td>{PolicyPeriod.Policy.Account.AccountHolderContact.PrimaryAddress.State.DisplayName}<br/>
      {PolicyPeriod.Policy.Account.AccountHolderContact.PrimaryAddress.PostalCode}<br/>
      {PolicyPeriod.Policy.Account.AccountHolderContact.PrimaryAddress.Country.DisplayName}</td>
      </tr>
      <tr><td>Policy Location</td>     
      <td>{PolicyPeriod.PolicyLocations.Entry.AccountLocation.AddressLine1}<br/>
      {PolicyPeriod.PolicyLocations.Entry.AccountLocation.State}<br/>
      {PolicyPeriod.PolicyLocations.Entry.AccountLocation.Country} <br/>
      {PolicyPeriod.PolicyLocations.Entry.AccountLocation.PostalCode}<br/>
      {PolicyPeriod.PolicyLocations.Entry.AccountLocation.City}<br/>
      </td>
      </tr>
     </Table>
      </div>
)  
} 
}

export default  PolicyDetail ;