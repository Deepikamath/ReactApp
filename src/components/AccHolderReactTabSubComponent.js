
import React, { Component } from "react";
import { Table, Button} from "reactstrap";

import ReactTable from "react-table-v6"
import "react-table-v6/react-table.css";

//import { withRouter } from 'react-router-dom';
import AccHolderHomeScreen from './AccHolderHomeScreenComponent'
import {PolicyInfo} from '../shared/PolicyInfo.json'
class AccHolderReactTabSub extends Component {
  constructor(props) {
    super(props);
   
 
  }

   

render() {
  //alert(this.props.policies.length)

  
  const  PolicyPeriod = this.props.PolicyPeriod
    var entity= null;
  // alert(PolicyPeriod.PolicyNumber)
  
  if(PolicyPeriod.Policy.Account.AccountHolderContact.Subtype== 'Company'){
    PolicyPeriod.Policy.Account.AccountHolderContact.Subtype= PolicyPeriod.Policy.Account.AccountHolderContact['entity-Company'].Name
  }
  else {
    PolicyPeriod.Policy.Account.AccountHolderContact.Subtype= PolicyPeriod.Policy.Account.AccountHolderContact['entity-Person'].Name
  }
  const data = [{PolicyPeriod}]
     // alert (entity)
  const columns = [
    {
      Header:"Account Name",
      accessor: "PolicyPeriod.Policy.Account.AccountHolderContact.Subtype"
   },
   {
    Header:"Account #",
    accessor: "PolicyPeriod.Policy.Account.AccountNumber"
   },
   {
    Header:"Business Address",
    accessor: "PolicyPeriod.Policy.Account.AccountHolderContact.PrimaryAddress.AddressType"
   },
   {
    Header : "In Force Premium",
    accessor : "PolicyPeriod.TotalPremiumRPT"
}

]



return (

<div className="container">

<Button onClick={this.props.backbutton}>Back</Button>
  <br />
  <br />
<ReactTable striped bordered hover data={data}
columns={columns} defaultPageSize = {5} />

</div>

)
}
}




export default   AccHolderReactTabSub ; 