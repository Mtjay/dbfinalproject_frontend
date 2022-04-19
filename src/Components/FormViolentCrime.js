import React from 'react'

const FormViolentCrime = ({parseQuerry/*useState variable*/}) =>{
    return(
        <form onSubmit={parseQuerry}>


        <label for="crime_type">Crime Type:</label>
        <select name="crime_type" id="crime_type">
        <option value="select">-select-</option>    
        <option value="violent">Violent</option>
        <option value="property">Property</option>
        </select>
        <br></br>

        
      

        <label for="query1">Query1:</label>
        <select name="query1" id="query1">
        <option value="select">-select-</option>
        <option value="all">show</option>
        
        </select>
        

        <label for="query2">Query2:</label>
        <select name="query2" id="query2">
        <option value="select">-select-</option>
        <option value="all">show</option>
        
        </select>
        

        <label for="query3">Query3:</label>
        <select name="query3" id="query3">
        <option value="select">-select-</option>
        <option value="all">show</option>
        
        </select>
        

        <label for="query4">Query4:</label>
        <select name="query4" id="query4">
        <option value="select">-select-</option>
        <option value="all">show</option>
        
        </select>
        
        <label for="query5">Query5:</label>
        <select name="query5" id="query5">
        <option value="select">-select-</option>
        <option value="all">show</option>
        
        </select>
        <br></br>
        <input type="submit" value="Submit"/>
    </form>
    )}

export default FormViolentCrime

