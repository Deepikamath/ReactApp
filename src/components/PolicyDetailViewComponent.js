
import React, { Component } from "react";
import { Table, Label, Card, CardBody, CardTitle, CardText } from "reactstrap";
import Moment from 'moment'
class PolicyDetailView extends Component {
  constructor(props) {
    super(props);
  }

  fnFormarAmt(amt) {
    return (amt * 1.00).toLocaleString(navigator.language, { minimumFractionDigits: 0 })
  }

  fnConverages(PolicyPeriod) {
    if (PolicyPeriod.Policy.Product.DisplayName === "General Liability") {
      return this.fnGLExposure(PolicyPeriod)
    }
    else if (PolicyPeriod.Policy.Product.DisplayName === "Workers' Compensation")

    return this.fnWorkersComp(PolicyPeriod)
  }


  fnGLExposure(PolicyPeriod) {
    return (
      <div>

        <h4>General Liability</h4>
        <Table>
          <tr>
            <th style={{ width: "120px" }}>Effective Date</th>
            <th style={{ width: "120px" }}>Expiration Date</th>
            <th style={{ width: "250px" }}>Policy Location</th>
            <th style={{ width: "100px" }}>Class Code</th>
            <th style={{ width: "200px" }}>Description</th>
            <th style={{ width: "100px" }}>Basis Amt</th>
            <th style={{ width: "100px" }}>Basis</th>
          </tr>
          {PolicyPeriod.GLLine.GLExposuresWM.Entry.map(GLLine => (


            <tr>
              <td> {Moment(GLLine.EffectiveDate).format('MM/DD/YYYY')}</td>
              <td>{Moment(GLLine.ExpirationDate).format('MM/DD/YYYY')}</td>
              <td >{GLLine.LocationWM.LocationNum + ". " + this.fnAddress(GLLine.LocationWM.AccountLocation)}</td>
              <td>{GLLine.ClassCode.Code}</td>
              <td>{GLLine.ClassCode.Classification}</td>
              <td>{this.fnFormarAmt(GLLine.BasisAmount)}</td>
              <td>{GLLine.ClassCode.Basis.Description}</td>

            </tr>


          ))}
        </Table>
      </div>
    )
  }
  fnWorkersComp(PolicyPeriod) {

    return (
      <div>
        <h4>Workers Compensation</h4>
        <Table>
          <tr>


            <th >Policy Location</th>
            <th style={{ width: "100px" }}>Class Code</th>
            <th style={{ width: "200px" }}>Description</th>
            <th style={{ width: "120px" }}>No. of<br></br>Employees</th>
            <th style={{ width: "100px" }}>Basis Amt</th>

          </tr>
          {PolicyPeriod.WorkersCompLine.WCCoveredEmployees.Entry.map(WCLine => (


            <tr>

              <td nowrap >{WCLine.LocationWM.LocationNum + ". " + this.fnAddress(WCLine.LocationWM.AccountLocation)}</td>
              <td>{WCLine.ClassCode.Code}</td>
              <td>{WCLine.ClassCode.ShortDesc}</td>
              <td>{WCLine.NumEmployees}</td>

              <td>{WCLine.IfAnyExposure === "true" ? "If Any" : WCLine.BasisAmount}</td>

            </tr>


          ))}
        </Table>
      </div>
    )
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
  fnName(obj) {

    var entity = null;
    var entityPersonFN = null;
    var entityPersonLN = null;

    //  const Subtype = props.Subtype;
    if (obj.Subtype === 'Company') {
      entity = obj['entity-Company'].Name
      return (
        <span>{entity}</span>
      );
    }
    else if (obj.Subtype === 'Person') {
      entityPersonFN = obj['entity-Person'].FirstName
      entityPersonLN = obj['entity-Person'].LastName
      return (
        <span>{entityPersonFN + " " + entityPersonLN}</span>
      );
    }

  }

  render() {
    const PolicyPeriod = this.props.PolicyPeriod

    return (
      <div>  <button className="newbtn" onClick={this.props.backbutton}>Back</button>
      {/* <button  onClick={this.props.backbutton} class="button">back</button> */}
        <Card className="card" >

          <CardBody className="policiypreviewdiv">
            <CardTitle className="policiypreviewHeader">
              <span> Account Information</span> <br></br>

            </CardTitle>

            <CardText className="cardtext">
              <Label className="classPolicyLabel">Account Number</Label>    <br></br>
              <span>  {PolicyPeriod.Policy.Account.AccountNumber}</span> <br></br>
              <Label className="classPolicyLabel">Account Type</Label> <br></br>
              <span>
                {PolicyPeriod.Policy.Account.AccountHolderContact.Subtype}

              </span> <br></br>
              <Label className="classPolicyLabel">Account Name</Label> <br></br>
              <span>

                {/* <fnAccountName Subtype={PolicyPeriod.Policy.Account.AccountHolderContact.Subtype}></fnAccountName>  */}
                {this.fnName(PolicyPeriod.Policy.Account.AccountHolderContact)}
              </span> <br></br>
              {/* <Label className="classPolicyLabel">Transaction Type</Label> <br></br>
              <span>
                {PolicyPeriod.Job.Subtype.DisplayName}
              </span>  <br></br> */}
              <Label className="classPolicyLabel">Primary Address</Label> <br></br>
              <span>

                {this.fnAddress(PolicyPeriod.Policy.Account.AccountHolderContact.PrimaryAddress)}
              </span>  <br></br>
            </CardText>
          </CardBody>
        </Card>
        <br></br>

        <Table width="100%"> <tr><td width="50%">
          <Card className="card" >

            <CardBody className="policiypreviewdiv">
              <CardTitle className="policiypreviewHeader">
                <span> Policy Details</span> <br></br>

              </CardTitle>

              <CardText className="cardtext">
                <Label className="classPolicyLabel">Policy Number</Label>    <br></br>
                <span>  {PolicyPeriod.PolicyNumber}</span> <br></br>
                <Label className="classPolicyLabel">Product</Label> <br></br>
                <span>
                  {PolicyPeriod.Policy.Product.DisplayName}

                </span> <br></br>
                <Label className="classPolicyLabel">Policy Status</Label> <br></br>
                <span>
                  {PolicyPeriod.PeriodDisplayStatus}
                </span> <br></br>
                <Label className="classPolicyLabel">Policy Period</Label> <br></br>
                <span>
                  {Moment(PolicyPeriod.PeriodStart).format('MM/DD/YYYY') + " - " + Moment(PolicyPeriod.PeriodEnd).format('MM/DD/YYYY')}

                </span>  <br></br>
                <Label className="classPolicyLabel">Written Date</Label> <br></br>
                <span>
                  {Moment(PolicyPeriod.WrittenDate).format('MM/DD/YYYY')}

                </span>  <br></br>
                <Label className="classPolicyLabel">Issue Date</Label> <br></br>
                <span>
                  {Moment(PolicyPeriod.Policy.IssueDate).format('MM/DD/YYYY')}

                </span>  <br></br>
                <Label className="classPolicyLabel">Term Number</Label> <br></br>
                <span>
                  {PolicyPeriod.TermNumber}
                </span>  <br></br>
                <Label className="classPolicyLabel">Under Writer</Label> <br></br>
                <span>
                  {PolicyPeriod.UWCompany.DisplayName}
                </span>  <br></br>
              </CardText>
            </CardBody>
          </Card>

        </td>

          <td width="50%">
            <Card className="card" >

              <CardBody className="policiypreviewdiv">
                <CardTitle className="policiypreviewHeader">
                  <span> Premium Details</span> <br></br>

                </CardTitle>

                <CardText className="cardtext">
                  <Label className="classPolicyLabel">Total Premium</Label>    <br></br>
                  <span>  $ {this.fnFormarAmt(PolicyPeriod.TotalPremiumRPT.slice(0, -3))}</span> <br></br>
                  <Label className="classPolicyLabel">Taxes And Surcharges</Label> <br></br>
                  <span>

                    $ {this.fnFormarAmt(PolicyPeriod.TaxAndSurchargesRPT.slice(0, -3))}

                  </span> <br></br>
                  <Label className="classPolicyLabel">Total Cost</Label> <br></br>
                  <span>
                    $ {this.fnFormarAmt(PolicyPeriod.TotalCostRPT.slice(0, -3))}
                  </span>
                  <br></br>
                  {/* <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  */}
                </CardText>
              </CardBody>
            </Card>

          </td></tr>
        </Table>
        <Card className="card" >

          <CardBody className="policiypreviewdiv">
            <CardTitle className="policiypreviewHeader">
              <span> Insured Details</span> <br></br>

            </CardTitle>
            <h4>Primary Insured</h4>
            <CardText className="cardtext">
              {PolicyPeriod.PolicyContactRoles.Entry.length > 1 ?
                PolicyPeriod.PolicyContactRoles.Entry.map(ent => {
                  return ((ent.Subtype === "PolicyPriNamedInsured" ?
                    <div>
                      <Label className="classPolicyLabel">Name</Label>    <br></br>
                      <span>{this.fnName(ent.AccountContactRole.AccountContact.Contact)}</span>   <br></br>
                      <Label className="classPolicyLabel">Address </Label>    <br></br>
                      <span> {this.fnAddress(ent.AccountContactRole.AccountContact.Contact.PrimaryAddress)}</span> <br></br>
                    </div> :
                    <br></br>)
                  )
                })
                :
                (PolicyPeriod.PolicyContactRoles.Entry.Subtype === "PolicyPriNamedInsured" ?
                  <div>
                    <Label className="classPolicyLabel">Name</Label>    <br></br>
                    <span>{this.fnName(PolicyPeriod.PolicyContactRoles.Entry.AccountContactRole.AccountContact.Contact)}</span>   <br></br>
                    <Label className="classPolicyLabel">Address </Label>    <br></br>
                    <span> {this.fnAddress(PolicyPeriod.PolicyContactRoles.Entry.AccountContactRole.AccountContact.Contact.PrimaryAddress)}</span> <br></br>
                  </div> :
                  <br></br>

                )
              }
            </CardText>
          </CardBody>
        </Card>

        <Card className="card" >
          <CardBody className="policiypreviewdiv">
            <CardTitle className="policiypreviewHeader">
              <span> Policy Locations </span> <br></br>
            </CardTitle>

            <CardText className="cardtext">
              {
                PolicyPeriod.PolicyLocations.Entry.length > 1 ?


                  this.getPolLocations(PolicyPeriod.PolicyLocations.Entry)

                  :
                  <span>{PolicyPeriod.PolicyLocations.Entry.LocationNum + " . " + this.fnAddress(PolicyPeriod.PolicyLocations.Entry.AccountLocation)}</span>
              }
            </CardText>
          </CardBody>
        </Card>

        <Card className="card" >
          <CardBody className="policiypreviewdiv">
            <CardTitle className="policiypreviewHeader">
              <span> Coverages </span> <br></br>

            </CardTitle>

            <CardText className="cardtext">
              {this.fnConverages(PolicyPeriod)}
            </CardText>
          </CardBody>
        </Card>

      </div>
    )
  }
}

export default PolicyDetailView;