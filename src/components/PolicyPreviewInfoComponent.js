
import React, { Component } from "react";
import { Table, Button, Label,Card,CardBody,CardTitle,CardText} from "reactstrap";
import Moment from 'moment'
//import { withRouter } from 'react-router-dom';
class PolicyPreviewInfo extends Component {
    constructor(props) {
        super(props);
        
    }
    
    fnFormarAmt(amt) {
        return (amt * 1.00).toLocaleString(navigator.language, { minimumFractionDigits: 0 })
      }
    render() {

        return (

  
            <Card className="card" >
           <CardBody className="policiypreviewdiv">
                <CardTitle className="policiypreviewHeader">
                    <span> {this.props.PolicyPeriod.Policy.Product.DisplayName}</span> <br></br>

                </CardTitle>
<CardText className="cardtext">
                  <Label className="classPolicyLabel">Account Number</Label>    <br></br>   
                  <span>  {this.props.PolicyPeriod.Policy.Account.AccountNumber}</span> <br></br>
                  <Label className="classPolicyLabel">Policy Number</Label> <br></br>
                  <span>
              {this.props.PolicyPeriod.PolicyNumber}
              </span> <br></br>
              <Label className="classPolicyLabel">Premium Paid</Label> <br></br>
              <span>
              $ {(this.fnFormarAmt(this.props.PolicyPeriod.TotalCostRPT.slice(0, -3)))}
             
              </span> <br></br>
              <Label className="classPolicyLabel">Start Date</Label> <br></br>
              <span>
              {Moment(this.props.PolicyPeriod.PeriodStart).format('MM/DD/YYYY')}
              </span>  <br></br>
              <Label className="classPolicyLabel">End Date</Label> <br></br>
              <span>
              {Moment(this.props.PolicyPeriod.PeriodEnd).format('MM/DD/YYYY')}
              </span>  <br></br>
             <button className="newbtn" onClick={this.props.viewbutton}>View</button>
             </CardText>
            </CardBody>
            </Card>
        )

    }
}

export default PolicyPreviewInfo;