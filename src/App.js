//import React, { useEffect, useState } from 'react'
import FormViolentCrime from './Components/FormViolentCrime'
import './App.css';
import NavigationBar from './Components/NavigationBar';
import GraphHome from './Components/GraphHome';
import Querries from './Services/Querries'
//import axios from 'axios';



function App() {
var JSONobject = [];

  const parseQuerry=(event) => {
    event.preventDefault()
    //crime_type has only 2 values
    
    //case 1: violent and property are not selected, only use year crime_type and state
    if(event.target.violent.value === "select" && event.target.property.value === "select"){
      //case1.1: crime_type = violent
      console.log("case 1")
      const Querry = {
        from_year : event.target.from.value,
        to_year : event.target.to.value,
        crime_type : event.target.crime_type.value,
        state : event.target.state.value
      }
      Querries.violentCrime(Querry).then(res => {
        JSONobject = res;
        
        console.log(res)
      })
      //case2.2: crime_type = property
    }
    //case 2: if violent button is selected AND state has input
    else if(event.target.violent.value !== "select" && event.target.property.value === "select"){
      //case2.1: murder
      console.log("case 2.1")
      const Querry = {
        state : event.target.state.value,
        violent : event.target.violent.value
      }
      Querries.violentCrime(Querry).then(res =>{
        JSONobject = res; 
        console.log(res)
      })
      //case2.2: robbery
      //case2.3: aggravated assault
      //case2.4: violent
     // const Querry = {crime}
    }
   
    //case 3: if property button is selected AND state has input
    else if(event.target.violent.value === "select" && event.target.property.value !== "select"){
      console.log("case 2.2")
      const Querry = {
        state : event.target.state.value,
        property : event.target.property.value
      }
      Querries.violentCrime(Querry).then(res =>{
        JSONobject = res; 
        console.log(res)
      })
    }

    //case 4: complex querries
    //(optional) case 4: from year to year, show a particular crime

    // const Querry = {
    //   from_year : event.target.from.value,
    //   to_year : event.target.to.value,
    //   crime_category : event.target.crime_category.value,
    //   weapon_category : event.target.weapon_category.value
    // }

    //NOTE: Querry parser might be only needed in backend
    //to do: create JSON objects that will hold querry results
    //to do: if statement for type of querry(violent or property)

   // console.log(crimeQuerry)
    
   
  }


  return (
    <div>      
      <NavigationBar />
      <GraphHome/>
      <FormViolentCrime parseQuerry={parseQuerry}/>  
      
      
      <GraphHome/>
      <FormViolentCrime parseQuerry={parseQuerry}/>   
      <GraphHome/>
      <FormViolentCrime parseQuerry={parseQuerry}/>   
      
      </div>
  );
}

export default App;
