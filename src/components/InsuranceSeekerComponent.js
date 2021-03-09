import React, { Component } from 'react';
import {Form,Input,Row,Col, FormGroup,Button } from 'reactstrap';

import {SCREENS} from '../shared/question';
import Label from './LabelComponent';
import Radio from './RadioComponent';
import Question from './QuestionComponent';



class InsuranceSeeker extends Component{
    constructor(props) {
        super(props);
        this.state = {
            currentStep: 0
        }
    }

    moveToNextStep = (e) => {
        e.preventDefault();
        const {currentStep} = this.state;
        if (currentStep < 4) {
            this.setState({
                currentStep: currentStep + 1
            });
        }
    }
    moveToPreviousStep = (e) => {
        e.preventDefault();
        const {currentStep} = this.state;
        if (currentStep < 4) {
            this.setState({
                currentStep: currentStep - 1
            });
        }
    }
    render () {
        const {currentStep} = this.state;
               return(
                   
                <div className='container'>
                    <Question activeScreen= {currentStep} />
                          <Label activeScreen={currentStep}/> 
                          {/* <Radio /> */}
                         <Form>
                             <FormGroup>
                             <Col md={3}>  
                             {/* <Row md={4}> */}
                             <Button type="submit" color="primary" onClick={(e) => this.moveToPreviousStep(e)}>Previous</Button> {' '}{' '}
                                 <Button type="submit" color="primary" onClick={(e) => this.moveToNextStep(e)}>Next</Button> 
                             {/* </Row> */}
                             </Col>
                             </FormGroup>
                             </Form> 

                         {/* <Form>
                            
                                
                                    <Row md={5}>
                                <Button type="submit" color="primary">Next</Button> 
                                </Row>
                           
                            </Form>   */}
                            
                         
                        
                     </div>

                 );


    }

}
export default InsuranceSeeker;