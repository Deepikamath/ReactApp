
import React, { Component } from "react";
import { Table, Button} from "reactstrap";
import {PolicyInfo} from '../shared/PolicyInfo.json'
import AccHolderSub from './AccHolderSubComponent';
import { withRouter,useHistory} from 'react-router-dom';
import './common.css'
class AccHolderHomeScreen extends Component {
  constructor(props) {
    super(props);
    //const selectedPolicy;
    this.state={
      selectedPol: null
    };
  
  }

onViewSelect(PolicyPeriod){
  //alert("hi")
  this.setState({selectedPol : PolicyPeriod})

}

onBack(){
  //alert("empty")
  this.setState({selectedPol : null});
}


render() {
 // alert(this.props.policies.length + " hello")
  if(this.state.selectedPol!= null){
  //alert(this.state.selectedPol.PolicyNumber);
   return(
  <AccHolderSub PolicyPeriod={this.state.selectedPol} backbutton={ ()=> this.onBack()} />
  )
  }
else{
  if(this.props.policies.length > 0 ){
  //  alert(this.props.policies.length )
    // const accno = this.props.policies.map(policy => (
    //   policy.PolicyPeriod.Policy.Account.AccountNumber
     

    // ))
   // const groups = groupBy(accno,  'AccountNumber');
   // alert(groups +"  print")
    //if(this.state.selectedPol == null){
    const policyItems = this.props.policies.map(policy => (
     
    
    <tr>
      <td>
        
    {policy.PolicyPeriod.Policy.Account.AccountNumber}
    </td>
    <td>
    {policy.PolicyPeriod.PolicyNumber}
    </td>
     <td>
    {policy.PolicyPeriod.Job.JobNumber}
    </td>
    <td>
    {policy.PolicyPeriod.Job.Subtype.DisplayName}
    </td>  
    <td>
     {/* <Button>View</Button>  */}
    
      <Button  className="btn-standard.btn-pink" onClick={ () => this.onViewSelect(policy.PolicyPeriod)}>View</Button>
    </td>
    </tr>  
    
     
    )
    )
    
return(
  <div className = "container">
      {/* <div className="row row-header">
        <div className="col-sm-9">
        </div>
        <div className="col-sm-3">
         <h2>Account #</h2>
         <h3>{accno}</h3>
        </div>

     </div>                    */}
  <Table bordered='true' CELLSPACING='1'>
    <thead>
    <tr>
        <th>Account #</th>
        <th>Policy #</th>
        <th>Transaction #</th>
        <th>Customer Request</th>
        <th></th></tr>
        </thead>
       
        {policyItems}
        </Table>
      </div>
)
  
  }
     return(
        <div>No policy found</div>  
      
     )
  }
}

}

export default AccHolderHomeScreen;