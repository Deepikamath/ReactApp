import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import { Navbar, NavbarBrand } from 'reactstrap';
//import Menu from './Components/MenuComponent_old';
import Menu from './components/MenuComponent_RouteParam';
import Main from './components/MainComponent_RouteParam';

//import InsuranceSeeker from './components/InsuranceSeekerComponent';
import {BrowserRouter} from 'react-router-dom';
import InsuranceSeeker from './components/InsuranceSeekerComponent';

class App extends Component {
  render ()
  {
    return(
      <div className="App">
      <BrowserRouter>
       <div>
          <Main/>
         
        </div>
        </BrowserRouter>
      </div>
    );
 
   }
}

export default App;