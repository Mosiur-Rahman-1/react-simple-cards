import React from 'react';
// import logo from '../icons/';
import './App.css';

function App() {

  return (
    <div className = "main-container">
      <p className = "heading">Most used adobe apps</p>
      <hr className= "heading-line"/>
      <Products name = "Photoshop" price = "US$20.99/mo" 
        description = "Lightroom, Photoshop, Lightroom Classic, and 20GB of cloud storage (1TB available)."
        source = {process.env.PUBLIC_URL + "/icons/photoshop.png"}></Products>
      <Products name = "Illustrator" price = "US$20.99/mo" 
        description = "Lightroom, Photoshop, Lightroom Classic, and 20GB of cloud storage (1TB available)."
        source = {process.env.PUBLIC_URL + "/icons/illustrator.png"}></Products>
      <Products name = "InDesign" price = "US$19.99/mo" 
        description = "Lightroom, Photoshop, Lightroom Classic, and 20GB of cloud storage (1TB available)."
        source = {process.env.PUBLIC_URL + "/icons/indesign.png"}></Products>
      <Products name = "After Effects" price = "US$9.99/mo" 
        description = "Lightroom, Photoshop, Lightroom Classic, and 20GB of cloud storage (1TB available)."
        source = {process.env.PUBLIC_URL + "/icons/after-effects.png"}></Products>
    </div>
    
  );
}

function Products(props) {
return (

  <div className ="secondary-container">
    <div className ="first-child">
      <img className= "child-img" src={props.source} alt=""/>
      <h3>{props.name}</h3>
      <h2>{props.price}</h2>
      <p>{props.description}</p>
      <button className = "child-btn">Buy now</button>
    </div>
  </div>
);
}

export default App;
