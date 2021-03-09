import React, { Component } from 'react';
import {Form,Input,Row,Col, FormGroup,Button } from 'reactstrap';

import {SCREENS} from '../shared/question';

class Label extends Component{

    render () {
               return(
            <div>
                
                {SCREENS.map((quest)=>{
                     if(quest.id == 0)
                    return (
                   <div className='container' style={{display:'-ms-inline-flexbox', justifyContent:'left', alignItems:'left', height: '30vh'}}>
                      <h1>{quest.HeaderQuestion}</h1>
                        <div>
                            <br/>
                            <br/>
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
                     else if(quest.id == 2)
                     return(
                        <div className='container' style={{display:'-ms-inline-flexbox', justifyContent:'left', alignItems:'left', height: '30vh'}}>
                        <h1>{quest.HeaderQuestion}</h1>
                          <div>
                              <br/>
                              <br/>
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
                     else if(quest.id == 3)
                     return(
                        <div className='container' style={{display:'-ms-inline-flexbox', justifyContent:'left', alignItems:'left', height: '30vh'}}>
                        <h1>{quest.HeaderQuestion}</h1>
                          <div>
                              <br/>
                              <br/>
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

                     else if(quest.id == 4)
                     return(
                        <div className='container' style={{display:'-ms-inline-flexbox', justifyContent:'left', alignItems:'left', height: '30vh'}}>
                        <h1>{quest.HeaderQuestion}</h1>
                          <div>
                              <br/>
                              <br/>
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

                     else if(quest.id == 5)
                     return(
                        <div className='container' style={{display:'-ms-inline-flexbox', justifyContent:'left', alignItems:'left', height: '30vh'}}>
                        <h1>{quest.HeaderQuestion}</h1>
                          <div>
                              <br/>
                              <br/>
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