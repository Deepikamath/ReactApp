
import React, { Component } from "react";
import { Table, Button} from "reactstrap";
//import { withRouter } from 'react-router-dom';
import AccHolderHomeScreen from './AccHolderHomeScreenComponent'
import {PolicyInfo} from '../shared/PolicyInfo.json'
class AccHolderSub extends Component {
  constructor(props) {
    super(props);
   }
 
   fnAddress(obj) {
    var str = ""
    if (obj.AddressLine1 !== undefined && obj.AddressLine1.length > 0) {
      str = str + obj.AddressLine1 + ", "
    }
    if (obj.AddressLine2 !== undefined && obj.AddressLine2.length > 0) {
      str = str + obj.AddressLine2 + ", "
    }
    if (obj.AddressLine3 !== undefined && obj.AddressLine3.length > 0) {
      str = str + obj.AddressLine3 + ", "
    }
    if (obj.City !== undefined && obj.City.length > 0) {
      str = str + obj.City + ", "
    }
    if (obj.State.DisplayName !== undefined && obj.State.DisplayName.length > 0) {
      str = str + obj.State.DisplayName + ", "
    } else if (obj.State !== undefined && obj.State.length > 0) {
      str = str + obj.State + ", "
    }
    if (obj.PostalCode !== undefined && obj.PostalCode.length > 0) {
      str = str + obj.PostalCode + ", "
    }
    if (obj.County !== undefined && obj.County.length > 0) {
      str = str + obj.County + ", "
    }
    if (obj.Country.DisplayName !== undefined && obj.Country.DisplayName.length > 0) {
      str = str + obj.Country.DisplayName
    } else if (obj.Country !== undefined && obj.Country.length > 0) {
      str = str + obj.Country
    }
    return (str)
  }

  getPolLocations(objArr) {
    return (objArr.map(ent => (
      <div>{ent.LocationNum + " . " + this.fnAddress(ent.AccountLocation)}</div>
    )))
  }
render() {
  //alert("g")
//alert("Hello"+this.props.PolicyPeriod.Length)
  //if(this.props.PolicyPeriod.length > 0 ){
    
    const PolicyPeriod = this.props.PolicyPeriod
    var entity= null;
 //  alert(PolicyPeriod.PolicyNumber)
    const Subtype= PolicyPeriod.Policy.Account.AccountHolderContact.Subtype
  if(Subtype== 'Company'){
    entity= PolicyPeriod.Policy.Account.AccountHolderContact['entity-Company'].Name
  }
  else{
    entity= PolicyPeriod.Policy.Account.AccountHolderContact['entity-Person'].Name
  }
      
return(

  

  <div className = "container">
     <button onClick={this.props.backbutton}>Back</button>
  <br />
  <br />
  {/* <Table bordered='true'>
   <thead>
      <tr>
        <th>Transaction Number</th>
      </tr>
     
    </thead>       
    <tr>      
      <td>
         {PolicyPeriod.Job.JobNumber}
      </td>    
    </tr> 
  </Table> */}
     
  <Table bordered="true" className="-striped -highlight">
      {/* <tr> <td><thead>Account</thead></td> <td></td> </tr> */}
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
     
      <td>
        {/* {PolicyPeriod.PolicyLocations.Entry.AccountLocation.AddressLine1}<br/> */}
      {/* {PolicyPeriod.PolicyLocations.Entry.AccountLocation.State}<br/>
      {PolicyPeriod.PolicyLocations.Entry.AccountLocation.Country} <br/>
      {PolicyPeriod.PolicyLocations.Entry.AccountLocation.PostalCode}<br/>
      {PolicyPeriod.PolicyLocations.Entry.AccountLocation.City}<br/> */}
      {
                PolicyPeriod.PolicyLocations.Entry.length > 1 ?


                  this.getPolLocations(PolicyPeriod.PolicyLocations.Entry)

                  :
                  <span>{PolicyPeriod.PolicyLocations.Entry.LocationNum + " . " + this.fnAddress(PolicyPeriod.PolicyLocations.Entry.AccountLocation)}</span>
              }
      </td>
      </tr>
     </Table>
      </div>

)
  
} 
}

export default  AccHolderSub ;