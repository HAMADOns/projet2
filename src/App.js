
import './App.css';
import * as React from "react";
import './style.css'

const darkslateblueContainer = <div className="container" 
        style={{color:'white', backgroundColor:'darkslateblue'}}>
       </div>
const pinkContainer = <div className="container" 
        style={{color:'black', backgroundColor:'pink'}}>
       </div>
const greenContainer = <div className=  "container"  

        style={{color:'black', backgroundColor:'green'}}>
       </div>
 


const buttonAdd = <button> Ajouter </button>

function AddColor(){
  return <div>
    {buttonAdd}
  </div>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">    
      
        <div>Projet 2 </div>  
        Styles       
      </header>
    
      {darkslateblueContainer}
      <AddColor/>
      {pinkContainer}
      {greenContainer}
    </div>
  );
}

export default App;
