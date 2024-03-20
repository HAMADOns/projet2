
import './App.css';
import * as React from "react";
import './style.css'
import oml from './omelet.jpeg';


const ingredients = [
  {id: '123', value: '2 œufs'},
  {id: '456', value: "30 ml d'eau"},
  {id: '789', value: 'Pincée de sel'},
  {id: '010', value: 'Pincée de poivre'}
]
function Ingredient(){
  return (<div className="content" style={{ color : 'black' ,  fontFamily: 'sansSerif' }}>
    <ul>{ingredients.map(ingredient => <li key = {ingredient.id} > {ingredient.value}</li>)}
    </ul>
  </div>)
    
}

function Preparation(){
  return (<div className="content" style={{ color : 'black' ,  fontFamily: 'sansSerif' }}>
    Fouetter les œufs, l'eau, le sel et le poivre.
    Vaporiser une poêle antiadhésive de 8 po (20 cm) d'aérosol de cuisson. Chauffer à feu moyen. Verser la préparation aux œufs. À mesure que les œufs commencent à prendre près de la paroi, à l'aide d'une spatule, racler doucement la portion cuite vers le centre de la poêle. Pencher et tourner la poêle pour permettre à l'œuf non cuit de couler dans l'espace vide.
  </div>)
    
}
const whiteContainer = <><div className="container" 
    style={{ color : '#572a54' , backgroundColor:'white' , fontFamily: 'sansSerif' }} >
    Recette Omelette
    <img className='image' src={oml} alt="" />
    <div className="title">Ingrédients</div>
    <div className="content" style={{ color : 'black' ,  fontFamily: 'sansSerif' }}>
      <Ingredient/>
     </div>
     <div className="title">Préparation</div>
     <div className="content" style={{ color : 'black' ,  fontFamily: 'sansSerif' }}>
      <Preparation/>
     </div>
    </div>    
</>



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
