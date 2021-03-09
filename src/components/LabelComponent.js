import React, { Component } from 'react';
import {Form,Input,Row,Col, FormGroup,Button } from 'reactstrap';

import {SCREENS} from '../shared/question';
import Question from './QuestionComponent';

class Label extends Component{

//   constructor(props) {
//     super(props);
// }

    render () {
       
      const {activeScreen} = this.props;
      console.log(activeScreen, 'activeScreen');
       return(
               
            <div>
                  <Question />
                  
               {SCREENS.map((quest)=>{  
                  if(quest.id == activeScreen)
                  return (
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
       
                  );
               })}  
            </div>
        );
    }

}
export default Label;