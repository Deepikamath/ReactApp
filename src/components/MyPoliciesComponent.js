import React  from "react";
import Tab from './TabComponent'
import './common.css'
import PolicyList from "./PolicyListComponent";
import ReactTableExp from './ReactTableExpComponent'
class MyPolicies extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
           // policies: Policy,
          policies: []
        };
      }
      
  componentWillMount() {
  
    //fetch("http://64.251.19.189:5000/policies") 
  
    fetch("http://localhost:5001/policies")
      .then(res => res.json())
      .then(data => this.setState({ policies: data }));
       
  }


    render() {
       
      //  alert("render" + this.state.policies.length);
        if(this.state.policies.length >= 0){
          //  alert("length "+ this.state.policies.length)
      return (
          <div class="container">
        <main width="100%">
            <h1>My Policies</h1>
          <Tab>
            Active Policies
            <span>
              {/* PolicyList */}
                  <PolicyList policies={this.state.policies}/>
               {/* <ReactTableExp policies={this.state.policies}/> */}
            </span>
            Pending Policies
            <span>Pending Policies</span>
            Expired Policies
            <span>Expired Policies</span>
          </Tab>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br> 
           <br></br>
          <br></br>  
                </main>
        </div>
      );
    }
  }
}

export default MyPolicies;