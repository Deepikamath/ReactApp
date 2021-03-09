
import React, { Component } from "react"; 
import './common.css'
class AccountNo extends Component {
  constructor(props) {
    super(props);
    //const selectedPolicy;
    this.state={
      selectedPol: null
    };
  
  }
 


render() {
 // alert(this.props.policies.length + " hello")
    
  if(this.props.policies.length > 0 ){
    //if(this.state.selectedPol == null){
    const policyItems = this.props.policies.map(policy => (
     
    <tr>
      <td>
        
    {policy.PolicyPeriod.Policy.Account.AccountNumber}
    </td>
    
    </tr>  
    
     
    )
    )
    
return(
  <div className = "container">  
        {policyItems}  
  </div>
  )
    
  }
}

}

export default AccountNo;