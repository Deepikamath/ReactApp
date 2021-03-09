import React, { Component } from 'react';
import {Form,Input,Row,Col, FormGroup,Button } from 'reactstrap';

import {SCREENS} from '../shared/question';

class Question extends Component{
    // constructor(props) {
    //     super(props);
    // }
    render () {
        const {activeScreen} = this.props;
        console.log(activeScreen, 'activeScreen');
               return(
                  
            <div>
                
                {SCREENS.map((quest)=>{
                     if(quest.id == activeScreen)
                    return (
                    
                   <div className='container' style={{display:'-ms-inline-flexbox', justifyContent:'left', alignItems:'left', height: '10vh'}}>
                      <h1>{quest.HeaderQuestion}</h1>                     
                   </div>
                     );
                    
                  })} 
            </div>
        );
    }

}
export default Question;