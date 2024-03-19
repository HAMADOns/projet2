
import './App.css';
import * as React from "react";
import './style.css'

const smallContainer = <div className="container" 
        style={{color:'white', backgroundColor:'darkslateblue'}}>
        Petit conteneur dark texte blanc</div>
const mediumContainer = <div className="container" 
        style={{color:'black', backgroundColor:'pink'}}>
        Moyen conteneur rose texte noire</div>
const largeContainer = <div className=  



"container"  

        style={{color:'black', backgroundColor:'green'}}>
        Grand conteneur vert rose texte noire</div>
 
function Container({ children,style, color}){  
      return <div  
      
      style={{...style,border:'1px solid',color }}>{children}  </div>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">       
        Ceci est le site test des styles       
      </header>
      <Container color ='blue' style={{backgroundColor:'darkslateblue'}}>Ceci est un test</Container>
      {smallContainer}
      {mediumContainer}
      {largeContainer}
    </div>
  );
}

export default App;
