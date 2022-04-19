//import React, { useEffect, useState } from 'react'
import FormViolentCrime from './Components/FormViolentCrime'
import './App.css';
import NavigationBar from './Components/NavigationBar';
import GraphHome from './Components/GraphHome';
import Querries from './Services/Querries'
//import axios from 'axios';



function App() {

  const parseQuerry=(event) => {
    event.preventDefault()
    //crime_type has only 2 values
    //case 1: if violent or property buttons are selected, ignore crime type and year
    
    if(event.target.violent.value === "select" && event.target.violent.value === "select"){
      console.log("case 1")
      const Querry = {
        from_year : event.target.from.value,
        to_year : event.target.to.value,
        crime_type : event.target.crime_type.value,
        state : event.target.state.value
      }
      Querries.violentCrime(Querry)
    }
    //case 2: violent and property are not selected, only use year crime_type and state
    //case 3: complex querries
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
