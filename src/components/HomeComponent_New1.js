import {React,Component} from 'react';
//import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle,Button} from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem,Form,FormGroup,Input, Button, Modal, ModalHeader, ModalBody, Row, Col, Label,CardSubtitle } from 'reactstrap';
 import { Link } from 'react-router-dom';

 import { Control, LocalForm, Errors } from 'react-redux-form';

function RenderCard({item}) {

    return(
        
        <Card>
            <CardImg  className="card-img-top img-fluid"  src={item.image} alt={item.name} />
            <CardBody>
            <CardTitle ><h3>{item.name}</h3></CardTitle>
            
            {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
            <CardText>{item.description}</CardText>
            
        <Button  size="large" color="primary" outline onClick={this.toggleModal}>
                    <span className="fa fa-pencil fa-lg"> Click here</span>
                </Button>
            </CardBody>

            {/* <HomeForm InsuranceId={InsuranceId} > </HomeForm> */}

            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                     <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                        <ModalBody>
                            <Form onSubmit = {this.handleLogin}>
                                <FormGroup>
                                    <Label htmlFor= "username">Username</Label>
                                    <Input type ="text" id ="username" name ="username"
                                        innerRef={(input) => this.username = input} />
                                </FormGroup>
                                <FormGroup>
                                   
                                     <Label htmlFor="password">Password</Label>
                                    <Input type ="password" id ="password" name ="password"
                                     innerRef={(input) => this.password = input} />
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type = "checkbox" name="remember"
                                         innerRef={(input) => this.remember = input} />
                                        Remember me
                                    </Label>
                                </FormGroup>
                                <Button type="submit" value="submit" color ="primary">Login</Button>
                            </Form>
                        </ModalBody>
                 </Modal>
        </Card>
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

export default Home;



// const required = (val) => val && val.length;
// const maxLength = (len) => (val) => !(val) || (val.length <= len);
// const minLength = (len) => (val) => val && (val.length >= len);

// export class HomeForm extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             isModalOpen: false
//         };

//         this.toggleModal = this.toggleModal.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     toggleModal() {
//         this.setState({ isModalOpen: !this.state.isModalOpen });
//     }

//     handleSubmit(values) {
//         this.toggleModal();
//         console.log("Current State is:"+ JSON.stringify(values));
//        // alert("Current State is:"+ JSON.stringify(values));
      
//        // this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
//     }

//     render() {
//         return (
//             <div>
//                 <Button outline onClick={this.toggleModal}>
//                     <span className="fa fa-pencil fa-lg"> Submit comment</span>
//                 </Button>

//                 <div className="row row-content">
//                     <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
//                         <ModalHeader toggle={this.toggleModal}> Submit comment</ModalHeader>
//                         <ModalBody>
//                             <div className="col-12 col-md-9">
//                                 <LocalForm onSubmit={(values) => this.handleSubmit(values)} >
//                                     <Row className="form-group">
//                                         <Label htmlFor="rating">Rating</Label>
//                                         <Col md={10}>
//                                             <Control.select model=".rating" name="rating" className="form-control" >
//                                                 <option>1</option>
//                                                 <option>2</option>
//                                                 <option>3</option>
//                                                 <option>4</option>
//                                                 <option>5</option>
//                                             </Control.select>
//                                         </Col>
//                                     </Row>

//                                     <Row className="form-group">
//                                         <Label htmlFor="author" md={2}>Your name</Label>
//                                         <Col md={10}>
//                                             <Control.text model=".author" id="author" name="author" placeholder="Author" className="form-control" validators={{ required, minLength: minLength(3), maxLength: maxLength(15) }} />
//                                             <Errors className="text-danger" model=".author" show="touched" messages={{ required: 'Required', minLength: 'Must be greater than 3 characters', maxLength: 'Must be 15 charaters or less' }} />
//                                         </Col>
//                                     </Row>

//                                     <Row className="form-group">
//                                         <Label htmlFor="feedback" md={2}>Your feedback</Label>
//                                         <Col md={10}>
//                                             <Control.textarea model=".comment" id="comment" name="comment" rows="6" className="form-control" validators={{ required }} />
//                                             <Errors className="text-danger" model=".comment" show="touched" messages={{ required: 'Required' }} />
//                                         </Col>
//                                     </Row>

//                                     <Button type="submit" value="submit" color="primary">Submit</Button>
//                                 </LocalForm>
//                             </div>
//                         </ModalBody>
//                     </Modal>
//                 </div>
//             </div>
//         );
//     }
//}