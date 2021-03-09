import React, { Component } from 'react';
import {Form,Input,Row,Col, FormGroup,Button } from 'reactstrap';

import {SCREENS} from '../shared/question';
import {OPTIONS} from '../shared/options';

class Radio extends Component{

    render () {
               return(
            <div>
                
                {SCREENS.map((quest)=>{
                      if(quest.id == 1)
                    return (
                   <div className='container' style={{display:'-ms-inline-flexbox', justifyContent:'left', alignItems:'left', height: '30vh'}}>
                       
                       <h1>{quest.HeaderQuestion}</h1>
                        <div>
                          
                         <Form>
                            <FormGroup row> 
                               return(
                                   {quest.fields.map((optFld => {
                                       optFld.optionSet.map((k) =>{ 
                                           <h1>k.Label</h1>
                                       })}
                                   
                               ))}
                               );
                                  
                             
                            </FormGroup> 
                            </Form>                          
                         </div>                      
                    </div>
                     );
                  })}
            </div>
        );
    }

}
export default Radio;