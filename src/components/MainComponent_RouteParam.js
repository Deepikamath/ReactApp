import React, { Component } from 'react';
import Home from './HomeComponent_New';
import { NavbarBrand } from 'reactstrap';
//import Menu from './MenuComponent_RouterSPA';
import Menu_param from './MenuComponent_RouteParam';

import DishDetail from './DishDetailComponetFunction';
import InsuranceSeeker from './InsuranceSeekerComponent';
//import HomeOwners from './HomeOwnersComponent';
import { DISHES } from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotion';
import {INSURANCETYPE} from '../shared/InsuranceType';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {Switch,Route,Redirect} from 'react-router-dom';
import AboutUs from './AboutusComponent';
import Contact from './ContactComponent';
import Insurance from './InsuranceComponent';
import {PERSONALAUTO} from '../shared/personalAuto';
import {HOMEOWNERS} from '../shared/homeOwners';
import {UMBRELLA} from '../shared/umbrella';
import {RENTERS} from '../shared/renters';
import {SCREENS} from '../shared/question';
//import NextPreviousButton from './ButtonComp2';
//import Buttoncomp from './ButtonComponent';
import PolicyInfo from './PolicyInfoComponent'
import Policy from './policycomponent';
import PolicyNew from './policynewcomponent';
import AccHolderSub from './AccHolderSubComponent';
import ReactTableExp from './ReactTableExpComponent';
import MaterialUI from './materialUIComponent'
import MyPolicies from './MyPoliciesComponent';
import NewHome from './NewHomeComponent';


class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        comments:COMMENTS,
        promotions:PROMOTIONS,
        leaders:LEADERS,
        insurances : INSURANCETYPE,
        personalautos: PERSONALAUTO,
        homeowners: HOMEOWNERS,
        umbrellas:UMBRELLA,
        renters:RENTERS,
        screens:SCREENS
       // selectedDish: null
    };
  }

  // onDishSelect(dishId) {
  //   this.setState({ selectedDish: dishId});
  // }

  render() {
    const HomePage =() => {
      return (
       // <Buttoncomp screens="Everyone" />
        // <Buttoncomp screen={this.state.screens} />
        <Home 
        // dish={this.state.dishes.filter((dish)=> dish.featured)[0]} 
        // promotion={this.state.promotions.filter((promotion)=> promotion.featured)[0]} 
        // leader={this.state.leaders.filter((leader)=> leader.featured)[0]} 

        personalauto={this.state.personalautos.filter((personalauto)=> personalauto.featured)[0]} 
        umbrella={this.state.umbrellas.filter((umbrella)=> umbrella.featured)[0]} 
        homeowner={this.state.homeowners.filter((homeowner)=> homeowner.featured)[0]} 
      //  renter={this.state.renters.filter((renter)=> renter.id[0])} 
        />
        
      );
    }
  
  // render() {​​​​​​​
  //   const HomePage = () =>{​​​​​​​
  //       return(
  //           <Home dish={​​​​​​​this.state.dishes.filter((dish)=>dish.featured)[0]}​​​​​​​
  //                 promotion ={​​​​​​​this.state.promotions.filter((promo)=>promo.featured)[0]}​​​​​​​
  //                 leader={​​​​​​​this.state.leaders.filter((leader)=>leader.featured)[0]}​​​​​​​
                  
  //           />
  //       );
  //   }​​​
  const DishWithId =({match}) => {
return(
 
  <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
  comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
);
  }
  // const Insur =({match}) => {
  //   return(
     
  //     <InsuranceSeeker question={this.state.questions} 
  //     />
  //   );
  //     }
    return (
      <div>
        {/* <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Hastings Insurance</NavbarBrand>
          </div>
        </Navbar> */}
        <Header/>
        {/* <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}
        <Switch>
            <Route path="/home" component={HomePage} />
            <Route path="/aboutus" component={AboutUs} />
            <Route exact path="/menu" component={() => <Menu_param dishes={this.state.dishes} />} />
            <Route exact path="/Insurance" component={Insurance} />
            <Route path="/menu/:dishId" component={DishWithId}></Route>
            <Route path="/contact" component={Contact}/>
            <Route exact path="/insuranceseeker" component={InsuranceSeeker}></Route>
            <Route exact path="/Policy" component={Policy}></Route>
            <Route exact path="/PolicyInfo" component={AccHolderSub}></Route>
            <Route exact path="/PolicyNew" component={PolicyNew}></Route>
            <Route exact path="/MaterialUI" component={MaterialUI}></Route>
            <Route exact path="/ReactTable" component={ReactTableExp}></Route>
            
           
            <Route exact path="/NewHome" component={NewHome}></Route>
             
             <Route exact path="/MyPolicies" component={MyPolicies}></Route>
            {/* <Route exact path="/homeowners" component={HomeOwners}></Route>
            <Route exact path="/button" component={Buttoncomp}></Route>
            <Route exact path="/NextPreviousButton" component={NextPreviousButton}></Route> */}
            <Redirect to="/home" />
        </Switch>
        <Footer/> 
         </div>
    );
  }
}

export default Main;
