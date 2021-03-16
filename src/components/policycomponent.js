import React, { Component } from "react";
import { Table } from "reactstrap";
import {PolicyInfo} from '../shared/PolicyInfo.json'
class Policy extends Component {
  constructor(props) {
    super(props);

    this.state = {
       // policies: Policy,
      policies: []
    };
  }

  

  componentWillMount() {
    fetch("http://64.251.19.189:5000/policies")
   // fetch('../shared/PolicyInfo.json')
      .then(res => res.json())
      .then(data => this.setState({ policies: data }));
      //fetch('../shared/PolicyInfo.json')
      //.then((response) => response.json())
      //.then(data => this.setState({ policies: data })); 
  }



displayObject(object){
    return (      
      Object.keys(object).map(key =>(
        (typeof(object[key]) == 'string' ? 
        this.displayString(object,key) : 
        <tr><td>{key}</td><td>{this.displayObject(object[key])}</td></tr>)
      ))
    )
}

displayString(object,key){
  return (<tr><td>{key}</td><td>{object[key]}</td></tr>)
}

  render() {
    const policyItems = this.state.policies.map(policy => (
      <div key={policy._id}>
        <h1>Entry</h1>
        <Table bordered='true'>
          {this.displayObject(policy)}
        </Table>
        <br></br>
      </div>
    ));
    return (
      <div>
        <p>Fetching Data.</p>
          {policyItems}
        <p>Completed fetching Data.</p>
      </div>
    );
  }
}

export default Policy;