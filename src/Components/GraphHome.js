import React from "react"
import './GraphHome.css'

class GraphHome extends React.Component {
  render()  {
    return(
      <div>
        <hr style={{height: "1.5px", color: "black", width: 1200, marginLeft: 150, marginTop: 100}} />
        <div className="graph_elements">
          <img src={require("../Graph_Dummy.png")} height={200} width={338} alt="Graph_1" style={{marginTop: 20, marginLeft: 200}}/>
          <div className="graph_text">
            <h1 style={{marginLeft: 150, marginTop: 20, color: '#E1AFAF'}}>Graph-1 Title</h1>
            <p style={{marginLeft: 150, marginTop: 40, color: '#E1AFAF'}}>Lorem Ipsum is simply dummy text of the printing and typesetting<br />
              industry. Lorem Ipsum has been the industry's standard dummy<br />
              text ever since the 1500s, when an unknown printer took a galley<br />
              of type and scrambled it to make a type specimen book. </p> 
            <hr style={{height: "1.5px", color: "black", width: 600, marginLeft: 150, marginTop: 100}} />       
          </div>
        </div>
        <hr style={{height: "1.5px", color: "black", width: 1200, marginLeft: 150, marginTop: 100}} />
      </div>      
    )
  }
}

export default GraphHome