import React, { Component } from 'react';
import {Form,Input,Row,Col, FormGroup,Button } from 'reactstrap';
import Radio from './RadioComponent';

class HomeOwners extends Component{

    render () {
               return(
                <div className='container'>
                         
                          <Radio />
                         <Form>
                             <FormGroup>
                             <Col md={3}>  
                             {/* <Row md={4}> */}
                                 <Button type="submit" color="primary">Next</Button> 
                             {/* </Row> */}
                             </Col>
                             </FormGroup>
                             </Form> 

                         </div>
               
                 );
                
            
    }

}
export default HomeOwners;