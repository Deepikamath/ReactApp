import ReactTable from "react-table-v6"
import "react-table-v6/react-table.css";
import {  Button} from "reactstrap";
import React, { Component } from 'react';
import AccHolderReactTabSub from './AccHolderReactTabSubComponent';
import AccHolderSub from './AccHolderSubComponent';
import AccSubTemplate from "./AccSubTemplateComponent";
class ReactTableExp extends Component {
    constructor(props) {
        super(props);

    this.state={
        selectedPol: null
      };
    }
onViewSelect(PolicyPeriod){

    this.setState({selectedPol : PolicyPeriod})

  }

  onBack(){

    this.setState({selectedPol : null});
  }


render() {
  //const i=1;
    if(this.state.selectedPol!= null){
    //  if(i ==1){
         return(
       //  <AccSubTemplate PolicyPeriod={this.state.selectedPol} backbutton={ ()=> this.onBack()} />
        // <AccHolderReactTabSub PolicyPeriod={this.state.selectedPol} />
        // alert("Hi"+ i)

        <AccHolderSub PolicyPeriod={this.state.selectedPol} backbutton={ ()=> this.onBack()} />
          ) 
          
    //     }else if(i==2){
    //         return(
    //           // alert("Hi"+ i)
    //            <AccSubTemplate PolicyPeriod={this.state.selectedPol} backbutton={ ()=> this.onBack()} />
    //         )

    // }

        }
      else{
        if(this.props.policies.length > 0 ){

    const columns = [{
        Header:"Account #",
        accessor: "PolicyPeriod.Policy.Account.AccountNumber"
    },
    {
        Header:"Policy #",
        accessor: "PolicyPeriod.PolicyNumber"
    },
    {
        Header : "Transaction #",
        accessor : "PolicyPeriod.Job.JobNumber"
    },
    {
        Header : "Customer Request",
        accessor : "PolicyPeriod.Job.Subtype.DisplayName"
    },
    {Header:"View",

    Cell: ({original}) => {
    return(

        <button
         onClick={ () => this.onViewSelect(original.PolicyPeriod)}
      className="fa fa-pencil-square-o"></button>

    )
}}

    ]


return (

<div className="container">

<ReactTable striped bordered hover data={this.props.policies}
 columns={columns} defaultPageSize = {5}
  Button="view"  className="-striped -highlight" />

</div>

)
}
      }
    }
}


export default ReactTableExp;