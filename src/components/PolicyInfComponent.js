import React,{useState,useEffect} from 'react';
//import './App.css';
import {POLICYJSON} from '../shared/PolicyInfo.json'

function Policy() {
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('PolicyInfo.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div className="App">
     {
       data && data.length>0 && data.map((item)=><p>{item.AccountNumber}</p>)
     
     }
    </div>
  );
}

export default Policy;