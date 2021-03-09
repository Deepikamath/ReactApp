
import React  from "react";
import { Card, CardImg, CardImgOverlay, CardTitle,CardBody,CardText, Breadcrumb,BreadcrumbItem } from "reactstrap";
import {Link} from 'react-router-dom';
import {QUESTION} from '../shared/question';
 
 function RenderInsuranceSeekerItem({question}){
    this.setState({questions: QUESTION});
     return(

        // <Card  onClick={() => onClick(dish.id)}> 
        <Card>
              <CardTitle heading>{question.HeaderQuestion}</CardTitle> 
        </Card>
     );
 }
    const InsuranceSeeker = (props) => {
        
        const insuranceseeker = props.questions.map((question) => {
        //const insuranceseeker = props.QUESTION.map((question) => {
            return(
                    <div  className="col-12 col-md-5 m-1">
                      
                       <RenderInsuranceSeekerItem question={question}/>
                    </div>
            );
        });
  
        
  
        return(
            <div className = "container">
                <div className="row">
                 
                    <div className="col-12">
                        <h3>Line of Business</h3>
                        <hr></hr>
                    </div>
                </div>
                <div className = "row">
                    
                        {insuranceseeker}
  
                </div>
                
            </div>
        );

    }
      
  



export default InsuranceSeeker;

