import React,{useState} from 'react';
//import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle,Button} from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle,Form,FormGroup,Input, Button, Modal, ModalHeader, ModalBody, Row, Col, Label,CardSubtitle } from 'reactstrap';
//import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Row, Col, Label,CardSubtitle } from 'reactstrap';
// import { Link } from 'react-router-dom';

import {Link} from 'react-router-dom'
import './common.css'
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
            <CardImg  className="card-img-top"  src={item.image} alt={item.name} />
            <CardBody>
            <CardTitle ><h3>{item.name}</h3></CardTitle>
            
            {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
            <CardText>{item.description}</CardText>
            
             <Button  size="large" color="primary" onClick={setModalIsOpenToTrue}>
                    <span className="fa fa-pencil fa-lg"> Click here</span>
                </Button>

            </CardBody>
          <Modal isOpen={modalIsOpen} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
          
                <button className="ModelClose" onClick={ setModalIsOpenToFalse}>x</button>
              <h2><br></br>{item.description}<br></br>
              <br></br></h2>  
               
            </Modal>
                 </Card>
    );

}
 

function Home(props) {
    return(
        <div className="container">
            <div className="row align-items-start">
            

                  <div className="col-12 col-md m-1">
                    <RenderCard item={props.personalauto} Desc={props.persondesc}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.umbrella} Desc={props.umbrelladesc} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.homeowner} Desc={props.homeownerdesc}/>
                </div> 
                {/* <div className="col-12 col-md m-1">
                    <RenderCard item={props.renter} />
                </div> */}
            </div>
        </div>
    );
}

export default Home


