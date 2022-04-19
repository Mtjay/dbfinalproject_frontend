//import React, { useEffect, useState } from 'react'
import FormViolentCrime from './Components/FormViolentCrime'
import './App.css';
import NavigationBar from './Components/NavigationBar';
import RenderObjs from './Components/RenderObjs';
import GraphHome from './Components/GraphHome';
import Querries from './Services/Querries'
import React, { useEffect,useState } from 'react'
import { useQuery } from 'react-query'
//import axios from 'axios';

// function Tester(value=[]){
//   return(
//     <div>{value.map((e)=>e)}</div>
//   )
// }

function App() {
  const [JSONobject, setJSONobject] = useState([]) 
 
  var objn
  var Querry;
  const parseQuerry= async (event) => {
    event.preventDefault()
    //crime_type has only 2 values
    
    //case 1: violent and property are not selected, only use year crime_type and state
    if(event.target.violent.value === "select" && event.target.property.value === "select"&& event.target.query1.value === "select"&&event.target.query2.value === "select"&&event.target.query3.value === "select"&&event.target.query4.value === "select"&&event.target.query5.value === "select"){
      //case1.1: crime_type = violent
      console.log("case 1")
       Querry = {
        from_year : event.target.from.value,
        to_year : event.target.to.value,
        crime_type : event.target.crime_type.value,
        state : event.target.state.value
      }
      //await Querries.violentCrime(Querry)
      // setJSONobject(await Querries.violentCrime(Querry))
      
     
      //   console.log(JSONobject)
    
      //case2.2: crime_type = property
    }
    //case 2: if violent button is selected AND state has input
    else if(event.target.violent.value !== "select" && event.target.property.value === "select"){
      //case2.1: murder
      console.log("case 2.1")
       Querry = {
        state : event.target.state.value,
        violent : event.target.violent.value
      }
      // Querries.violentCrime(Querry).then(res =>{
      //   JSONobject = res; 
      //   console.log(res)
      // })
      //case2.2: robbery
      //case2.3: aggravated assault
      //case2.4: violent
     // const Querry = {crime}
    }
   
    //case 3: if property button is selected AND state has input
    else if(event.target.violent.value === "select" && event.target.property.value !== "select"){
      console.log("case 2.2")
       Querry = {
        state : event.target.state.value,
        property : event.target.property.value
      }
      // Querries.violentCrime(Querry).then(res =>{
      //   JSONobject = res; 
      //   console.log(res)
      // })
    }else if(event.target.query1.value === "show"||event.target.query2.value === "show"||event.target.query3.value === "show"||event.target.query4.value === "show"||event.target.query5.value === "show"){
      console.log("case 2.3")
      if(event.target.query1.value === "show"){
        Querry = {
          state : event.target.state.value,
          query : event.target.query1.value
        }
      }
      else if(event.target.query2.value === "show"){
        Querry = {
        state : event.target.state.value,
        query : event.target.query2.value
        }
     }
     else if(event.target.query3.value === "show"){
      Querry = {
      state : event.target.state.value,
      query : event.target.query3.value
      }
    }
    else if(event.target.query4.value === "show"){
      Querry = {
      state : event.target.state.value,
      query : event.target.query4.value
      }
    }
    else if(event.target.query5.value === "show"){
      Querry = {
      state : event.target.state.value,
      query : event.target.query5.value
      }
    }
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
   console.log(await Querries.violentCrime(Querry))
   setJSONobject(await Querries.violentCrime(Querry))
    return(JSONobject)
    
   //console.log(await Querries.violentCrime(Querry))
   
   
  
 

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
