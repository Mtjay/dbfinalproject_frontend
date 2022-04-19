    import React from 'react'

    const FormViolentCrime = ({parseQuerry/*useState variable*/}) =>{
        return(
            <form onSubmit={parseQuerry}>

            <label for="from">From:</label>
            <select name="from" id="from">
            <option value="2008">2008</option>
            <option value="2009">2009</option>
            <option value="2010">2010</option>
            <option value="2011">2011</option>
            </select>
            <br></br>

            <label for="to">To:</label>
            <select name="to" id="to">
            <option value="2008">2008</option>
            <option value="2009">2009</option>
            <option value="2010">2010</option>
            <option value="2011">2011</option>
            </select>
            <br></br>

            <label for="crime_type">Crime Type:</label>
            <select name="crime_type" id="crime_type">
            <option value="violent">Violent</option>
            <option value="property">Property</option>
            </select>
            <br></br>

            <label for="state">State:</label>
            <select name="state" id="state">
            <option value="alabama">Alabama</option>
            <option value="alaska">Alaska</option>
            <option value="arizona">Arizona</option>
            <option value="other">other</option>
            </select>
            <br></br>
            
            <label for="violent">violent:</label>
            <select name="violent" id="violent">
            <option value="select">-select-</option>
            <option value="murder">Murder</option>
            <option value="rape">Rape</option>
            <option value="assault">Assault</option>
            <option value="robbery">Robbery</option>
            </select>
            <t></t>

            <label for="property">property:</label>
            <select name="weapon_category" id="weapon_category">
            <option value="select">-select-</option>
            <option value="murder">Murder</option>
            <option value="rape">Rape</option>
            <option value="assault">Assault</option>
            <option value="robbery">Robbery</option>
            </select>
            <br></br>
            <input type="submit" value="Submit"/>
        </form>
        )}

    export default FormViolentCrime

