
import React, { Component } from "react";
import { Table, Button, Card, CardImg, CardText, CardBody, CardTitle, } from "reactstrap";
import PolicyPreviewInfo from "./PolicyPreviewInfoComponent";
import PolicyDetail from './PolicyDetailComponent'
import PolicyDetailView from './PolicyDetailViewComponent'
//import { withRouter } from 'react-router-dom';
class PolicyList extends Component {
    constructor(props) {
        super(props);
        this.onViewSelect=this.onViewSelect.bind(this);

    this.state={
        selectedPol: null
      };
    }
      onViewSelect(PolicyPeriod){        
        this.setState({selectedPol : PolicyPeriod})
        
      }
    
     
    
    render() {

       if(this.state.selectedPol!= null){
        return(
          <PolicyDetailView PolicyPeriod={this.state.selectedPol} backbutton={()=> this.onViewSelect(null)}></PolicyDetailView>   
        // <PolicyDetail PolicyPeriod={this.state.selectedPol} backbutton={()=>{this.onViewSelect(null)}}> </PolicyDetail>
        )
       }else{
         
       
        if(this.props.policies.length > 0 ){
        
          const policyItems = this.props.policies.map(policy => (

      // <div className="row">
      //   <div className="col">
        
     
      <PolicyPreviewInfo PolicyPeriod={policy.PolicyPeriod} viewbutton={()=> this.onViewSelect(policy.PolicyPeriod)}></PolicyPreviewInfo>
       
           
      //  </div>
      //  </div>
          )
          )
          
      return(
        <div className = "container classcontent">
           <Table>
             <tr>
             <div className="col-12 col-md-4 m-1">
             {policyItems}
             </div>
             </tr>
       
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
      
      
export default PolicyList;