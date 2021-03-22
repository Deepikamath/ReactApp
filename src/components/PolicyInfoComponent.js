import React, { Component } from 'react';

//import {POLICYINFO} from '../shared/PolicyInfoPayload';

import PostData from '../shared/PolicyInfo.json'
class PolicyInfo extends Component{

    //   constructor(props) {
    //     super(props);
    // }
    
        render () {
           
           return(
            <div>
               
                {PostData.PolicyPeriod.map((pd,i) => {
                    return (
                        <div key={i}>
                            <div>
                                <p>{pd.Account.map((Pol,i)=> {
                                    return(
                                        <p>{Pol.Account.map((polAcc,i)=>{
                                            return(
                                                <p>{polAcc.AccountNumber}</p>
                                                // <p>{polAcc.AccountHolderContact.map((AccHC,i))}</p>
                                            )
                                        })}</p>
                                    )
                                })}</p>
                                    
                               
                            </div>
                        </div>
                 ) })}
            </div>

          );

        }
    
    }
    export default PolicyInfo;