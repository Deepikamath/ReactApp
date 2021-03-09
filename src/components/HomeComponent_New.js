import React,{useState} from 'react';
//import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle,Button} from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle,Form,FormGroup,Input, Button, Modal, ModalHeader, ModalBody, Row, Col, Label,CardSubtitle } from 'reactstrap';
//import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Row, Col, Label,CardSubtitle } from 'reactstrap';
// import { Link } from 'react-router-dom';

import {Link} from 'react-router-dom'

function RenderCard({item,onClick}) {
    
    const [modalIsOpen,setModalIsOpen] = useState(false);
  
    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    
    }

    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    
    }

  
    return(
      
        <Card>
            <Link to={`/menu/${item.id}`} ></Link>
            <CardImg  className="card-img-top img-fluid"  src={item.image} alt={item.name} />
            <CardBody>
            <CardTitle ><h3>{item.name}</h3></CardTitle>
            
            {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
            <CardText>{item.description}</CardText>
            
             <Button  size="large" color="primary" onClick={setModalIsOpenToTrue}>
                    <span className="fa fa-pencil fa-lg"> Click here</span>
                </Button>

            </CardBody>
          <Modal isOpen={modalIsOpen}>
              
                <button onClick={ setModalIsOpenToFalse}>x</button>
                <LobDescription />
            </Modal>
                 </Card>
    );

}

function LobDescription () {

    return (
        
        <ul>
        
             
             <p>A Standard personal auto offering defines a standard set of coverages, limits, and deductibles. A Beginning Driver offering has different limits and deductibles to satisfy the needs of drivers who are just starting to drive as well as their financially-responsible parents</p>
                 
        </ul>     
        
    )

}
const Lob = (props) => {
        
    const lob = props.dishes.map((dish) => {
        return(
                <div key = {dish.id} className="col-12 col-md-5 m-1">
                   {/* <RenderMenuItem dish={dish} onClick={props.onClick}/> */}
                   <RenderCard dish={dish}/>
                </div>
        );
    });

    

    return(
        <div className = "container">
             
            <div className = "row">
                
                    {lob}

            </div>
            <div className = "row">
                {/* {this.renderDish(this.state.selectedDish)} */}
            </div>
        </div>
    );

}
 

function Home(props) {
    return(
        <div className="container">
            <div className="row align-items-start">
            

                  <div className="col-12 col-md m-1">
                    <RenderCard item={props.personalauto} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.umbrella} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.homeowner} />
                </div> 
                {/* <div className="col-12 col-md m-1">
                    <RenderCard item={props.renter} />
                </div> */}
            </div>
        </div>
    );
}

export default Home


