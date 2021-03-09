
import {  Button} from "reactstrap";
import React, { Component } from 'react';
import ReactTable from 'react-table-6'
import 'react-table-6/react-table.css' 

//import "react-table/react-table.css"; 
class ReactTable1 extends Component { 
render() { 
const tableData = [{ 
PolicyNumber: '123456', 

}] 

const policyItems =  this.props.policies.map(policy => (
     
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


const columns = [{ 
Header: 'Account #', 
accessor: 'AccountNumber' 

},{ 
Header: 'Policy #', 
accessor: 'PolicyNumber' 

},{ 
Header: 'Transaction #', 
accessor: 'TransactionNumber' 

},
{ 
Header: 'Customer RequestType', 
accessor: 'Customer RequestType' 

}] 
return ( 
<center>
<div> 
<ReactTable 
data={policyItems} 
columns={columns} 
defaultPageSize = {2} 
pageSizeOptions = {[2,4,6,8]
}  
/> 
</div> 
</center>
) 
} 
}  

export default ReactTable1;