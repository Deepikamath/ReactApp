// import React, { Component } from 'react';
// import { Card, CardImg,  CardText, CardBody, CardTitle } from 'reactstrap';

// class Insurance extends Component{

//     constructor(props){
//         super(props);
//     }

//     render(){
//         const dish = this.props.
//         return (
//             <Card>
//                 <CardImg top src={dish.image} alt={dish.name} />
//                 <CardBody>
//                     <CardTitle>{dish.name}</CardTitle>
//                     <CardText>{dish.description}</CardText>
//                 </CardBody>
//             </Card>
//         );

//     }
    
// }

// export default Insurance;


import React  from "react";
import { Card, CardImg, CardImgOverlay, CardTitle,CardBody,CardText } from "reactstrap";


 function RenderMenuItem({insurance, onClick}){
     return(
        <Card  onClick={() => onClick(insurance.id)}> 
                         
            <CardImg width ="100%" object src ={insurance.image} alt={insurance.name} />
   
            <CardImgOverlay body className="ml-5">
            <CardTitle heading>{insurance.name}</CardTitle>
      
             </CardImgOverlay>
        </Card>
     );
 }
    const Insurance = (props) => {
        const insurance = props.insurances.map((insurance) => {
            return(
                    <div key = {insurance.id} className="col-12 col-md-5 m-1">
                       <RenderMenuItem insurance={insurance} onClick={props.onClick}/>
                    </div>
            );
        });
  
        
  
        return(
            <div className = "container">
                <div className = "row">
                    
                        {insurance}
  
                </div>
                <div className = "row">
                    {/* {this.renderDish(this.state.selectedDish)} */}
                </div>
            </div>
        );

    }
      
  



export default Insurance;




