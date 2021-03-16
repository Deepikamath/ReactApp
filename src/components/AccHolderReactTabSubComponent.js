
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


const data2 = [{PolicyPeriod}]
     // alert (entity)
  const column2 = [
    {
      Header:"Address",
      accessor: "PolicyPeriod.Policy.Account.AccountHolderContact.PrimaryAddress.State.DisplayName"
    //  ,accessor: "PolicyPeriod.Policy.Account.AccountHolderContact.PrimaryAddress.State.PostalCode"
   },
   {
    Header:"PostalCode",
    accessor:"PolicyPeriod.Policy.Account.AccountHolderContact.PrimaryAddress.PostalCode"
   },
   {
    Header:"Country",
    accessor:"PolicyPeriod.Policy.Account.AccountHolderContact.PrimaryAddress.Country.DisplayName"
   }   
]



return (

<div className="container">

<Button onClick={this.props.backbutton}>Back</Button>
  <br />
  <br />
  <div className="row">
    <div className="col">
      <ReactTable striped bordered hover data={data}
        columns={columns} defaultPageSize = {5} className="-striped -highlight"/>
    </div>
    <div className="col">
    <ReactTable striped bordered hover data={data2}
    columns={column2} defaultPageSize = {5} className="-striped -highlight"/>
    </div>

</div>
</div>

)
}
}




export default   AccHolderReactTabSub ; 