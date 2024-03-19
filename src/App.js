
import './App.css';
import * as React from "react";
import './style.css'

const whiteContainer = <div className="container" 
        style={{ backgroundColor:'white'}}>
       </div>
const pinkContainer = <div className="container" 
        style={{ backgroundColor:'pink'}}>
       </div>
const greenContainer = <div className=  "container"  

        style={{backgroundColor:'green'}}>
       </div>

const blackContainer = <div className=  "container"  
      style={{ backgroundColor:'black'}}>
      </div>


function App() {
  return (
    <div className="App">
      
        <div>Projet 2 </div>  
        Styles            

      {whiteContainer}
     
      
    
    </div>
  );
}

export default App;
