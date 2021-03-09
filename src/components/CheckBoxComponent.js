import React, { Component } from 'react';
import {Form,Input,Row,Col, FormGroup,Button } from 'reactstrap';

import {SCREENS} from '../shared/question';
//import {Breadcrumb,BreadcrumbItem,Button,Form, FormGroup,Label, Input, Col,Row,FormFeedback} from 'reactstrap';
// function InsuranceSeeker(props){
//     return(
//         <div className="container">
//             <h4>Insurance </h4>
//         </div>
//     );
// }
class Label extends Component{

    render () {
               return(
            <div>
                
                {SCREENS.map((quest)=>{
                    return (
                   <div className='container' style={{display:'-ms-inline-flexbox', justifyContent:'left', alignItems:'left', height: '30vh'}}>
                        <h1>{quest.HeaderQuestion}</h1>
                       
                        <div>
                            {/* {quest.Label.map((lab) => (
                            
                             <h3>{lab.LabelName}</h3>
                            
                           ))} */}
                         <Form>
                                <FormGroup row>                                    
                                    {quest.fields.map((field)=> {                                       
                                      if(field.AnswerType == 'Text')
                                        return (<Col md={3}>                                                    
                                        <Input type="Text" id={field.name} placeholder={field.Label} width="15px"/>                                     
                                        </Col>)                                       
                                     })}                                    

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
export default Label;