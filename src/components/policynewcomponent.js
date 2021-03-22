import React, { Component } from "react";
import { Table } from "reactstrap";
import {PolicyInfo} from '../shared/PolicyInfo.json'
import AccHolderHomeScreen from "./AccHolderHomeScreenComponent";
import AccHolderSubComponent from "./AccHolderSubComponent";
import ReactTableExp from './ReactTableExpComponent';
class Policy extends Component {
  constructor(props) {
    super(props);

    this.state = {
       // policies: Policy,
      policies: []
    };
  }



  componentDidMount() {
    //fetch("http://localhost:5001/policies")
    fetch("http://64.251.19.189:5001/policies")
   // fetch('../shared/PolicyInfo.json')
      .then(res => res.json())
      .then(data => this.setState({ policies: data }));
      //fetch('../shared/PolicyInfo.json')
      //.then((response) => response.json())
      //.then(data => this.setState({ policies: data }));
  }


render() {
   //alert(this.state.policies.length)
if(this.state.policies.length>0){
     return(
       <dv>
          <ReactTableExp policies={this.state.policies}/>
       {/* <AccHolderHomeScreen policies={this.state.policies}/> */}

       </dv>
     )
  }

return(
    <div>Not found </div>

   )
}

}

export default Policy;
