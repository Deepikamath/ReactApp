import React, { Component } from "react";
import { Table } from "reactstrap";
import {PolicyInfo} from '../shared/PolicyInfo.json'
import AccHolderHomeScreen from "./AccHolderHomeScreenComponent";
import AccHolderSubComponent from "./AccHolderSubComponent";
import AccountNo from "./AccountNoComponent";
import ReactTableExp from './ReactTableExpComponent';

import ReactTable from "react-table-v6"
import {  Button} from "reactstrap";
import React, { Component } from 'react'; 
import "react-table-v6/react-table.css"; 
class Policy extends Component {
  constructor(props) {
    super(props);

    this.state = {
    
      policies: []
    };
  }

  

  componentWillMount() {
    //fetch("http://localhost:5000/policies")
    fetch("http://64.251.19.189:5000/policies")
    
   // fetch('../shared/PolicyInfo.json')
      .then(res => res.json())
      .then(data => this.setState({ policies: data }));
      //fetch('../shared/PolicyInfo.json')
      //.then((response) => response.json())
      //.then(data => this.setState({ policies: data })); 
  }


  render () {
    const { tableData } = this.state.policies;

    return (<ReactTable.default
                    data={tableData}
                    columns={[
                        {
                            Header: 'Details',
                            columns: [
                                {
                                    Header: 'Tenant Name',
                                    accessor: 'tenantName',
                                },
                                {
                                    Header: 'Support Engineer',
                                    id: 'supportEngineer',
                                    accessor: d => d.supportPerson,
                                },
                            ],
                        },
                        {
                            Header: 'Info',
                            columns: [
                                {
                                    Header: 'Dealer ID',
                                    accessor: 'dealerID',
                                },
                                {
                                    Header: 'Status',
                                    accessor: 'status',
                                },
                            ],
                        },
                        {
                            Header: 'Logs',
                            columns: [
                                {
                                    Header: 'File Path',
                                    accessor: 'logFilePath',
                                },
                            ],
                        },
                    ]}
                    defaultPageSize={10}
                    className="-striped -highlight"
            />
    );
}
};


export default Policy;
