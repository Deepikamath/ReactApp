
import React, { Component } from "react";
import { Table, Button} from "reactstrap";
//import { withRouter } from 'react-router-dom';
import AccHolderHomeScreen from './AccHolderHomeScreenComponent'
import {PolicyInfo} from '../shared/PolicyInfo.json'
class AccHolderSub extends Component {
  constructor(props) {
    super(props);
  
  //  this.handleBack= this.handleBack.bind(this)
  }
// handleBack(){
//   this.props.history.goBack()
// }
   

render() {
  // alert(this.props.policies.length)
  //if(this.props.PolicyPeriod.length > 0 ){
    
    const PolicyPeriod = this.props.PolicyPeriod
    var entity= null;
  // alert(PolicyPeriod.PolicyNumber)
    const Subtype= PolicyPeriod.Policy.Account.AccountHolderContact.Subtype
  if(Subtype== 'Company'){
    entity= PolicyPeriod.Policy.Account.AccountHolderContact['entity-Company'].Name
  }
  else{
    entity= PolicyPeriod.Policy.Account.AccountHolderContact['entity-Person'].Name
  }
      
return(

  

  <div className = "container">
     <Button onClick={this.props.backbutton}>Back</Button>
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
     
  <Table bordered="true">
      {/* <tr> <td><thead>Account</thead></td> <td></td> </tr> */}
      <th>Account header</th>
       

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
     
     
     </Table>
      </div>

)
  
} 
}

export default  AccHolderSub ;